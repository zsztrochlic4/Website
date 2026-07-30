import { ChevronRight, ExternalLink, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/universities', label: 'Universities & organisations' },
  { href: '/about', label: 'Our story' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0A0A0B]/[0.85] backdrop-blur-xl">
      <div className="container relative z-20 flex h-[72px] items-center justify-between">
        <a href="/" className="flex min-h-11 items-center text-left" aria-label="StrengthHub Online home">
          <img
            src="/strengthhub-logo-960.png"
            alt=""
            width={960}
            height={180}
            className="block h-auto w-[190px] max-w-[60vw] sm:w-[220px]"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={currentPath === link.href ? 'page' : undefined}
              className={`text-sm font-medium transition-colors hover:text-white ${currentPath === link.href ? 'text-white' : 'text-white/[0.58]'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="https://strengthhubonline.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#7ED957]/45 hover:bg-[#7ED957]/10 sm:inline-flex"
          >
            App demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((value) => !value)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border text-white shadow-lg transition duration-200 active:scale-95 lg:hidden ${
              open
                ? 'border-[#7ED957]/40 bg-[#7ED957]/15 shadow-[#7ED957]/10'
                : 'border-white/10 bg-white/[0.05] shadow-black/20 hover:border-white/20 hover:bg-white/[0.08]'
            }`}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="nav-icon-enter h-5 w-5" /> : <Menu className="nav-icon-enter h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="mobile-nav-backdrop fixed inset-x-0 top-[72px] z-0 h-[calc(100dvh-72px)] bg-black/65 backdrop-blur-[2px] lg:hidden"
          />
          <div id="mobile-navigation" className="mobile-nav-enter absolute inset-x-0 top-full z-10 px-3 pt-3 lg:hidden">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.11] bg-[#101012]/[0.96] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#7ED957]/10 blur-3xl" />
              <div className="relative">
                <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#7ED957]">Explore StrengthHub</p>
                <div className="flex flex-col gap-1">
                  {links.map((link) => {
                    const active = currentPath === link.href;

                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => setOpen(false)}
                        className={`group flex min-h-14 items-center justify-between rounded-2xl border px-4 py-3 text-left text-[15px] font-semibold transition duration-200 active:scale-[0.985] ${
                          active
                            ? 'border-[#7ED957]/25 bg-[#7ED957]/10 text-white shadow-[inset_0_0_24px_rgba(126,217,87,0.04)]'
                            : 'border-transparent text-white/70 hover:border-white/[0.08] hover:bg-white/[0.05] hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 ${active ? 'text-[#7ED957]' : 'text-white/25'}`} />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-2 border-t border-white/[0.07] p-2 pt-4">
                  <a
                    href="https://strengthhubonline.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#7ED957] px-4 py-3 text-sm font-black text-[#0A0A0B] shadow-[0_12px_32px_rgba(126,217,87,0.18)] transition duration-200 hover:bg-[#9FE264] active:scale-[0.985]"
                  >
                    Open app demo <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
