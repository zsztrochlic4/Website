import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center bg-[#0A0A0B] py-20 text-white">
      <div className="container">
        <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-white/[0.08] bg-[#121214] p-8 sm:p-12" data-reveal="scale">
          <p className="eyebrow">404 · Page not found</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-6xl">This page has moved or does not exist.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#98A2B3] sm:text-lg">
            Head back home or explore the platform to find the StrengthHub information you need.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7ED957] px-6 py-3 text-sm font-black text-[#0A0A0B] transition hover:bg-[#9FE264]">
              <Home className="h-4 w-4" aria-hidden="true" /> Back to home
            </a>
            <a href="/platform" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/[0.08]">
              Explore the platform <ArrowLeft className="h-4 w-4 rotate-180" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
