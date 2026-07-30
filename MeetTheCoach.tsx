import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', goals: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!isSupabaseConfigured) {
      setErrorMsg('Form submissions are not configured yet. Please email us directly.');
      setStatus('error');
      return;
    }

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        goals: form.goals.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', goals: '' });
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.12] text-white placeholder-white/30 focus:ring-2 focus:ring-[#7ED957] focus:border-[#7ED957] outline-none transition-colors';

  return (
    <section id="contact" className="relative overflow-hidden bg-[#101012] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED957]/[0.07] blur-[110px]" />
      <div className="container relative">
        {/* Fill in your details */}
        <div className="mx-auto max-w-3xl rounded-[1.8rem] border border-white/[0.09] bg-[#0A0A0B] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:p-12" data-reveal="scale">
          <div className="text-center">
            <p className="eyebrow">Prefer we reach out to you?</p>
            <h3 className="mt-4 text-2xl font-black tracking-[-0.045em] text-white sm:text-3xl">Fill in your details</h3>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/[0.52]">
              Leave your information below and we’ll get back to you to arrange a walkthrough.
            </p>
          </div>

          {status === 'success' ? (
            <div className="mt-8 flex flex-col items-center rounded-2xl border border-[#7ED957]/30 bg-[#7ED957]/[0.06] p-8 text-center">
              <CheckCircle2 className="h-14 w-14 text-[#7ED957]" />
              <p className="mt-4 text-lg font-bold text-white">Thanks — your details have been received.</p>
              <p className="mt-2 text-sm text-white/[0.52]">We’ll be in touch shortly to arrange your walkthrough.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-white/[0.05] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/[0.08]"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="full_name" className="mb-2 block text-sm font-semibold text-white/70">Full name *</label>
                  <input
                    id="full_name"
                    type="text"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white/70">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-white/70">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="goals" className="mb-2 block text-sm font-semibold text-white/70">What are you looking to achieve?</label>
                <textarea
                  id="goals"
                  name="goals"
                  value={form.goals}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us about your audience, cohort, or goals (optional)"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#7ED957] px-7 py-4 text-sm font-bold text-[#0A0A0B] transition hover:bg-[#9FE264] disabled:opacity-50 sm:w-auto"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send my details
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
