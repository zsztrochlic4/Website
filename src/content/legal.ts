// Single source of truth for the StrengthHub Online legal documents.
//
// The Markdown files in /docs are the canonical, finalised versions. They are
// imported here verbatim (?raw) and rendered on the website, so the site can
// never drift from them — if a /docs Markdown file changes, the website updates
// automatically on the next build. The in-app copy (SHOAPPNATIVE
// src/content/legal.ts) must be kept in sync with the same /docs files.
//
// Do NOT edit the legal wording here. Edit the Markdown in /docs instead.

import privacyMarkdown from '../../docs/PRIVACY.md?raw';
import termsMarkdown from '../../docs/TERMS.md?raw';
import healthSafetyMarkdown from '../../docs/HEALTH_SAFETY.md?raw';

export type LegalSlug = 'privacy' | 'terms' | 'health-safety';

export interface LegalDoc {
  /** URL slug, e.g. "privacy". */
  slug: LegalSlug;
  /** Stable, permanent path, e.g. "/privacy". */
  path: string;
  /** Short label used in nav chips and the footer. */
  navLabel: string;
  /** Value for document.title. */
  documentTitle: string;
  /** H1 title taken from the Markdown, e.g. "Privacy Policy — StrengthHub Online". */
  title: string;
  /** The "Effective … · Version 1.0" line. */
  effective: string;
  /** The origin/contact meta line, e.g. "Melbourne, Victoria, Australia · info@…". */
  meta: string;
  /** Markdown body with the title and meta lines removed (rendered on the page). */
  body: string;
  /** The full, unmodified Markdown source. */
  markdown: string;
}

function buildDoc(
  slug: LegalSlug,
  path: string,
  navLabel: string,
  documentTitle: string,
  raw: string,
): LegalDoc {
  const normalized = raw.replace(/\r\n/g, '\n');
  const lines = normalized.split('\n');

  const titleLine = lines.find((line) => /^#\s+/.test(line)) ?? '';
  const title = titleLine.replace(/^#\s+/, '').trim();

  const effectiveIndex = lines.findIndex((line) => /^Effective\s/i.test(line.trim()));
  const effective = effectiveIndex >= 0 ? lines[effectiveIndex].trim() : '';

  // The origin/contact meta line is the next non-empty line after "Effective …".
  let metaIndex = -1;
  for (let i = effectiveIndex + 1; i < lines.length; i += 1) {
    if (lines[i].trim() !== '') {
      metaIndex = i;
      break;
    }
  }
  const meta = metaIndex >= 0 ? lines[metaIndex].trim() : '';

  const body = (metaIndex >= 0 ? lines.slice(metaIndex + 1) : lines).join('\n').trim();

  return { slug, path, navLabel, documentTitle, title, effective, meta, body, markdown: normalized };
}

export const legalDocs: LegalDoc[] = [
  buildDoc('privacy', '/privacy', 'Privacy Policy', 'Privacy Policy | StrengthHub Online', privacyMarkdown),
  buildDoc('terms', '/terms', 'Terms of Use', 'Terms of Use | StrengthHub Online', termsMarkdown),
  buildDoc(
    'health-safety',
    '/health-safety',
    'Health & Safety',
    'Health & Safety Information | StrengthHub Online',
    healthSafetyMarkdown,
  ),
];

export const legalDocsBySlug: Record<LegalSlug, LegalDoc> = legalDocs.reduce(
  (acc, doc) => {
    acc[doc.slug] = doc;
    return acc;
  },
  {} as Record<LegalSlug, LegalDoc>,
);
