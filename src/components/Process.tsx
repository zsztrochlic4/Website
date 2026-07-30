import { Apple, Dumbbell, LayoutDashboard, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

// Screenshot slots: replace the matching files in public/ to update product imagery without changing this component.
const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    image: '/app-dashboard-2026.png',
    width: 372,
    height: 827,
    alt: 'StrengthHub Online dashboard showing readiness, daily habits and today’s training plan',
    caption: 'A daily plan young adults can understand at a glance, bringing readiness, habits, training and busy period support into one clear home screen.',
    bullets: ['Daily progress checklist', 'Readiness and habit overview', 'Today’s training plan', 'Plan Around Your Life'],
  },
  {
    id: 'workout',
    label: 'Workout',
    icon: Dumbbell,
    image: '/app-workout-2026.png',
    width: 359,
    height: 833,
    alt: 'StrengthHub Online workout screen showing a guided Push Day session and exercise list',
    caption: 'Guided training without the cost of a personal trainer, with structured programs, exercise guidance and flexible shorter options.',
    bullets: ['Personalised programs', 'Exercise form guidance', 'Set, rep and progress logging', '12 minute bodyweight sessions'],
  },
  {
    id: 'nutrition',
    label: 'Nutrition',
    icon: Apple,
    image: '/app-nutrition-2026.png',
    width: 368,
    height: 829,
    alt: 'StrengthHub Online nutrition screen showing meal photo and daily eating check ins',
    caption: 'Food education that fits young adult budgets and routines, focused on practical choices rather than rigid rules or perfection.',
    bullets: ['Daily nutrition check ins', 'Budget friendly recipes', 'Balanced meal education', 'Vegan and dietary options'],
  },
  {
    id: 'progress',
    label: 'Progress',
    icon: TrendingUp,
    image: '/app-progress-2026.png',
    width: 387,
    height: 847,
    alt: 'StrengthHub Online progress screen showing eating quality, training gains and recent activity',
    caption: 'Training, strength, habits, sleep, steps and weight trends are presented together so improvement feels visible and motivating.',
    bullets: ['Customisable progress metrics', 'Strength and workout trends', 'Habit consistency', 'Clear goals and streaks'],
  },
  {
    id: 'community',
    label: 'Community',
    icon: Users,
    image: '/app-community-2026.png',
    width: 371,
    height: 836,
    alt: 'StrengthHub Online community screen showing campus groups, student posts and partner matching',
    caption: 'A healthier campus feels easier together through university, residence, society and partner organisation communities.',
    bullets: ['Campus and organisation groups', 'Challenges and leaderboards', 'Training partner matching', 'Events and shared wins'],
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = screens[activeIndex];
  const ActiveIcon = active.icon;

  const selectScreen = (index: number) => {
    setActiveIndex(index);

    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector(`[data-screen-card="${screens[index].id}"]`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <section className="bg-[#101012] py-20 text-white sm:py-28" aria-labelledby="inside-app-heading">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow">Inside the app</p>
          <h2 id="inside-app-heading" className="section-heading mt-4">Built to feel useful every day, not impressive once.</h2>
          <p className="section-copy mx-auto mt-5">Each part of the platform has a clear role in helping students and young adults make healthier choices independently.</p>
        </div>

        <div
          role="tablist"
          aria-label="StrengthHub app screens"
          className="mx-auto mt-10 flex max-w-4xl snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] sm:justify-center [&::-webkit-scrollbar]:hidden"
          data-reveal
          data-delay="1"
        >
          {screens.map(({ id, label, icon: Icon }, index) => (
            <button
              id={`screen-tab-${id}`}
              key={id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`screen-panel-${id}`}
              onClick={() => selectScreen(index)}
              className={`inline-flex min-h-11 shrink-0 snap-start items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeIndex === index ? 'scale-[1.02] bg-[#7ED957] text-[#0A0A0B] shadow-[0_8px_28px_rgba(126,217,87,0.18)]' : 'border border-white/[0.08] bg-white/[0.04] text-white/55 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" /> {label}
            </button>
          ))}
        </div>

        <div
          id={`screen-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`screen-tab-${active.id}`}
          className="mt-12 hidden items-center gap-12 md:grid lg:grid-cols-[0.88fr_1.12fr] lg:gap-20"
        >
          <div className="relative mx-auto w-[295px] lg:w-[320px]" data-reveal="left">
            <div className="absolute inset-10 rounded-full bg-[#7ED957]/10 blur-[80px]" />
            <div className="device-frame relative">
              <div className="device-screen">
                <img
                  key={active.id}
                  src={active.image}
                  alt={active.alt}
                  width={active.width}
                  height={active.height}
                  className="screen-swap block h-full w-full object-contain object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div data-reveal="right" data-delay="1">
            <div key={`copy-${active.id}`} className="screen-copy-enter">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#7ED957]/20 bg-[#7ED957]/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#9FE264]">
                <ActiveIcon className="h-4 w-4" aria-hidden="true" /> {active.label}
              </div>
              <h3 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">{active.label}, designed around real routines.</h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#98A2B3] sm:text-lg">{active.caption}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#121214] px-4 py-3.5 text-sm font-semibold text-white/[0.72]">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#7ED957]" aria-hidden="true" /> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Swipe through StrengthHub app screens"
        >
          {screens.map((screen, index) => (
            <article
              key={screen.id}
              data-screen-card={screen.id}
              className="w-[calc(100vw-2.5rem)] max-w-[350px] shrink-0 snap-center rounded-[1.6rem] border border-white/[0.08] bg-[#121214] p-5"
              aria-label={`${screen.label} app screen, ${index + 1} of ${screens.length}`}
            >
              <div className="device-frame mx-auto w-[min(72vw,255px)]">
                <div className="device-screen">
                  <img
                    src={screen.image}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    className="block h-full w-full object-contain object-top"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#7ED957]">{screen.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#98A2B3]">{screen.caption}</p>
              <ul className="mt-4 space-y-2">
                {screen.bullets.slice(0, 2).map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ED957]" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mobile-centred-note mt-2 text-center text-xs font-semibold text-white/35 md:hidden">Swipe to explore all five screens</p>
      </div>
    </section>
  );
};

export default Process;
