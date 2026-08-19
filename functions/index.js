import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { setGlobalOptions } from 'firebase-functions/v2';
import * as logger from 'firebase-functions/logger';

// Where the notification is sent, who it's from, and the region the function
// runs in. These come from functions/.env (written by the deploy workflow from
// repository secrets); the fallbacks keep local reasoning obvious.
//
// IMPORTANT: a v2 Firestore trigger must run in the same region as the
// Firestore database. Melbourne projects are usually australia-southeast1
// (Sydney) or australia-southeast2 (Melbourne) — set FUNCTION_REGION to match
// your database's location (Firebase console → Firestore Database shows it).
const REGION = process.env.FUNCTION_REGION || 'australia-southeast1';
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'zsztrochlic4@gmail.com';
const RESEND_FROM = process.env.RESEND_FROM || 'StrengthHub Online <onboarding@resend.dev>';

setGlobalOptions({ region: REGION, maxInstances: 5 });

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Fires when the contact form writes a new document to `contact_submissions`
// and emails the details to NOTIFY_EMAIL via Resend.
export const onContactSubmission = onDocumentCreated('contact_submissions/{id}', async (event) => {
  const data = event.data?.data();
  if (!data) {
    logger.warn('contact submission event had no data', { id: event.params.id });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    logger.error('RESEND_API_KEY is not set; cannot send the notification email');
    return;
  }

  const fullName = data.full_name ?? '';
  const email = data.email ?? '';
  const phone = data.phone ?? '';
  const goals = data.goals ?? '';

  const html = `
    <h2 style="margin:0 0 16px">New enquiry from the StrengthHub Online website</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>What they want to achieve:</strong><br>${escapeHtml(goals).replace(/\n/g, '<br>') || '<em>(not provided)</em>'}</p>
    <hr style="border:none;border-top:1px solid #ddd;margin:20px 0">
    <p style="color:#888;font-size:12px">Submission ${escapeHtml(event.params.id)}</p>
  `;

  const payload = {
    from: RESEND_FROM,
    to: [NOTIFY_EMAIL],
    subject: `New enquiry from ${fullName || 'a website visitor'}`,
    html,
  };
  // Let you reply straight to the person from your inbox.
  if (email) {
    payload.reply_to = email;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    logger.error('Resend API error', { status: response.status, body });
    // Throwing lets Cloud Functions retry transient failures.
    throw new Error(`Resend API returned ${response.status}`);
  }

  logger.info('Contact notification email sent', { id: event.params.id, to: NOTIFY_EMAIL });
});
