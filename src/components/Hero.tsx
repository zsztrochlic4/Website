import { ArrowRight, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#0A0A0B] pt-[72px] text-white">
      <div className="pointer-events-none absolute left-[-12rem] top-[16%] h-[36rem] w-[36rem] rounded-full bg-[#7ED957]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[35%] h-[32rem] w-[32rem] rounded-full bg-[#3B82F6]/[0.08] blur-[120px]" />

      <div className="container relative grid min-h-[calc(100vh-72px)] items-center gap-8 py-16 sm:gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-8 lg:py-20">
        <div className="order-2 max-w-3xl lg:col-start-1 lg:row-start-1 lg:self-end lg:order-none" data-reveal>
          <div className="mb-7 hidden items-center gap-2 rounded-full border border-[#7ED957]/25 bg-[#7ED957]/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9FE264] sm:inline-flex">
            <GraduationCap className="h-4 w-4" /> Built for Australian students and young adults
          </div>

          <h1 className="max-w-[760px] text-[2.8rem] font-black leading-[0.94] tracking-[-0.065em] text-white sm:text-[4.7rem] lg:text-[5.6rem] xl:text-[6.25rem]">
            Training built around <span className="text-[#7ED957]">student life.</span>
          </h1>

        </div>

        <p className="order-4 max-w-2xl text-lg leading-relaxed text-white/[0.58] sm:hidden" data-reveal>
            StrengthHub Online brings fitness, nutrition education, habit support and community into one platform designed for young adults. Built for students and adaptable for universities and organisations across Australia, it helps young people build confidence and consistency without expecting life to revolve around the gym.
          </p>

        <div className="relative order-1 -mt-3 mx-auto w-full max-w-[620px] md:mt-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:ml-auto lg:self-center lg:order-none" data-reveal="scale" data-delay="1">
          <div className="absolute inset-10 rounded-full bg-[#7ED957]/10 blur-[90px]" />
          <div className="relative mx-auto w-[min(64vw,240px)] sm:w-[310px] lg:w-[345px]">
            <div className="rounded-[2.7rem] border border-white/15 bg-[#121214] p-2 shadow-[0_45px_120px_rgba(0,0,0,0.8)]">
              <div className="aspect-[9/19.5] overflow-hidden rounded-[2.25rem] bg-black">
                <img
                  src="/app-dashboard-2026.png"
                  alt="StrengthHub Online student dashboard"
                  className="h-full w-full object-contain object-top"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="ambient-float absolute left-0 top-[18%] z-10 max-w-[158px] rounded-2xl border border-white/10 bg-[#121214]/[0.94] p-3 shadow-2xl backdrop-blur-xl sm:max-w-[200px] sm:p-4 lg:-left-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#7ED957] sm:text-[11px] sm:tracking-[0.16em]">Plan Around Your Life</p>
            <p className="mt-1.5 text-xs font-semibold leading-snug text-white sm:mt-2 sm:text-sm">Training adapts around exams, travel, work and busy weeks.</p>
          </div>

          <div className="ambient-float-delayed absolute bottom-[13%] right-0 z-10 max-w-[150px] rounded-2xl border border-white/10 bg-[#121214]/[0.94] p-3 shadow-2xl backdrop-blur-xl sm:max-w-[190px] sm:p-4 lg:-right-5">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#3B82F6] sm:text-[11px] sm:tracking-[0.16em]">12 minute workouts</p>
            <p className="mt-1.5 text-xs font-semibold leading-snug text-white sm:mt-2 sm:text-sm">Quick, guided sessions when time and equipment are limited.</p>
          </div>
        </div>

        <div className="order-5 max-w-3xl lg:col-start-1 lg:row-start-2 lg:self-start lg:order-none" data-reveal data-delay="1">
          <p className="hidden sm:block mb-7 max-w-2xl text-lg leading-relaxed text-white/[0.58] sm:text-xl">
            StrengthHub Online brings fitness, nutrition education, habit support and community into one platform designed for young adults. Built for students and adaptable for universities and organisations across Australia, it helps young people build confidence and consistency without expecting life to revolve around the gym.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://strengthhubonline.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-xl bg-[#7ED957] px-7 py-4 text-sm font-bold text-[#0A0A0B] transition hover:bg-[#9FE264]"
            >
              Try the app <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/universities"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              For universities <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <a href="/platform" className="mt-3 inline-flex min-h-11 items-center gap-2 px-1 text-sm font-semibold text-white/55 transition hover:text-white">
            Explore how the platform works <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/45">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#7ED957]" /> Evidence informed education</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#7ED957]" /> Flexible around busy periods</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#7ED957]" /> Ready for universities and organisations</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#7ED957]" /> Connected with health, wellbeing and gym partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
