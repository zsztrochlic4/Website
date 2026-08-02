import { ArrowLeft } from 'lucide-react';
import { legalDocs, legalDocsBySlug, type LegalSlug } from '../content/legal';
import { renderInline } from '../lib/markdown';
import LegalMarkdown from './LegalMarkdown';

interface LegalDocumentProps {
  slug: LegalSlug;
}

const LegalDocument = ({ slug }: LegalDocumentProps) => {
  const doc = legalDocsBySlug[slug];

  return (
    <main className="relative overflow-hidden bg-[#0A0A0B] pb-20 pt-[72px] text-white sm:pb-28">
      <div className="pointer-events-none absolute left-[-14rem] top-24 h-[32rem] w-[32rem] rounded-full bg-[#7ED957]/[0.07] blur-[120px]" />

      <div className="container relative">
        <article className="mx-auto max-w-[820px] py-14 sm:py-20">
          <header className="border-b border-white/[0.08] pb-10 sm:pb-12" data-reveal>
            <a
              href="/"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </a>

            <p className="eyebrow mt-6">StrengthHub Online</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl">
              {doc.title}
            </h1>

            {doc.effective ? (
              <p className="mt-6">
                <span className="inline-flex items-center rounded-full border border-[#7ED957]/30 bg-[#7ED957]/[0.08] px-4 py-1.5 text-sm font-semibold text-[#9FE264]">
                  {doc.effective}
                </span>
              </p>
            ) : null}

            {doc.meta ? <p className="mt-3 text-sm text-white/40">{renderInline(doc.meta, 'meta')}</p> : null}

            <nav
              aria-label="StrengthHub Online legal documents"
              className="mt-8 flex flex-wrap gap-2.5 text-sm"
            >
              {legalDocs.map((related) => {
                const active = related.slug === doc.slug;
                return (
                  <a
                    key={related.slug}
                    href={related.path}
                    aria-current={active ? 'page' : undefined}
                    className={
                      active
                        ? 'inline-flex min-h-11 items-center rounded-full border border-[#7ED957]/40 bg-[#7ED957]/15 px-4 py-2 font-semibold text-white'
                        : 'inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-medium text-white/60 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white'
                    }
                  >
                    {related.navLabel}
                  </a>
                );
              })}
            </nav>
          </header>

          <div className="pt-2" data-reveal>
            <LegalMarkdown markdown={doc.body} />
          </div>
        </article>
      </div>
    </main>
  );
};

export default LegalDocument;
