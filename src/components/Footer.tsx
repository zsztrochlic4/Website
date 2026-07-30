import { ExternalLink, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer data-site-footer className="border-t border-white/[0.07] bg-[#0A0A0B] py-10 text-white">
      <div className="container flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between" data-reveal>
        <div>
          <img
            src="/strengthhub-logo-960.png"
            alt="StrengthHub Online"
            width={960}
            height={180}
            className="block h-auto w-[240px] max-w-full"
            loading="lazy"
          />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/[0.38]">An Australian fitness and wellbeing platform for students and young adults, delivered with universities, organisations, health and wellbeing brands, and gyms.</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:flex-wrap sm:gap-x-6 xl:justify-end">
          <a href="mailto:info@strengthhubonline.com" className="-mx-2 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-white/[0.04] hover:text-white"><Mail className="h-4 w-4" /> info@strengthhubonline.com</a>
          <a href="tel:0435754525" className="-mx-2 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-white/[0.04] hover:text-white"><Phone className="h-4 w-4" /> 0435 754 525</a>
          <a href="https://strengthhubonline.app" target="_blank" rel="noopener noreferrer" className="-mx-2 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-white/[0.04] hover:text-white">Try the app <ExternalLink className="h-4 w-4" /></a>
          <a href="/privacy" className="-mx-2 inline-flex min-h-11 items-center rounded-lg px-2 py-2 transition hover:bg-white/[0.04] hover:text-white">Privacy Policy</a>
        </div>
      </div>

      <div className="container mt-8 border-t border-white/[0.06] pt-6 text-xs text-white/25">
        © {new Date().getFullYear()} StrengthHub Online. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
