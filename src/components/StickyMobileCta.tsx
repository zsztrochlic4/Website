import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

const StickyMobileCta = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer[data-site-footer]');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Try StrengthHub Online"
      aria-hidden={footerVisible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0B]/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 md:hidden ${
        footerVisible ? 'pointer-events-none translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <a
        href="https://strengthhubonline.app"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={footerVisible ? -1 : undefined}
        className="mx-auto flex min-h-12 w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#7ED957] px-5 py-3 text-sm font-black text-[#0A0A0B] shadow-[0_10px_30px_rgba(126,217,87,0.2)] transition hover:bg-[#9FE264] active:scale-[0.985]"
      >
        Try the app <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </aside>
  );
};

export default StickyMobileCta;
