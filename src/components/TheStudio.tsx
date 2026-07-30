import { Building2, CalendarRange, Check, Clock3, Dumbbell, HeartHandshake, Users } from 'lucide-react';

const studentFeatures = [
  {
    icon: CalendarRange,
    title: 'Busy weeks are expected',
    body: 'Plan Around Your Life lets students prepare for exams, placements, travel and other demanding periods before routines break down.',
  },
  {
    icon: Clock3,
    title: 'Short still counts',
    body: 'Guided 12 minute bodyweight sessions give students a realistic option when time, space or gym access is limited.',
  },
  {
    icon: HeartHandshake,
    title: 'Education over pressure',
    body: 'Clear fitness and food guidance builds confidence and health literacy without shame, extremes or an all or nothing mindset.',
  },
];

const partnershipBenefits = [
  'A branded or jointly branded digital wellbeing offering for students and young adults',
  'Support across movement, strength, everyday habits and practical nutrition education',
  'Campus, residence, workplace, membership or community challenges',
  'Flexible onboarding and rollout support for your audience or cohort',
  'Optional workshops, activations and tailored partner initiatives',
  'Added value through partnerships with leading health and wellbeing brands and gyms',
  'A platform young adults can continue using beyond a single event or campaign',
];

const TheStudio = () => {
  return (
    <>
      <section id="student-life" className="bg-[#0A0A0B] py-20 text-white sm:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div data-reveal="left">
              <p className="eyebrow">Designed for real young adult life</p>
              <h1 className="section-heading mt-4">Consistency should bend, not break.</h1>
              <p className="section-copy mt-5">
                Study, work and life change from week to week. StrengthHub is designed to remain useful when schedules become unpredictable, motivation dips or the perfect routine is not possible.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {studentFeatures.map(({ icon: Icon, title, body }, index) => (
                <article
                  key={title}
                  data-reveal="scale"
                  data-delay={String(index + 1)}
                  className="rounded-[1.4rem] border border-white/[0.08] bg-[#121214] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#7ED957]/25"
                >
                  <Icon className="h-5 w-5 text-[#7ED957]" />
                  <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/[0.48]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="universities" className="relative overflow-hidden border-y border-white/[0.07] bg-[#121214] py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute left-[-8rem] top-0 h-[28rem] w-[28rem] rounded-full bg-[#7ED957]/[0.07] blur-[100px]" />
        <div className="container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal="left">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7ED957]/25 bg-[#7ED957]/10">
              <Building2 className="h-6 w-6 text-[#7ED957]" />
            </div>
            <p className="eyebrow mt-6">For Australian universities & organisations</p>
            <h2 className="section-heading mt-4">A wellbeing platform young adults will actually open.</h2>
            <p className="section-copy mt-5">
              StrengthHub can complement student wellbeing, workforce development, community health, sport and engagement initiatives with practical support young adults can access wherever they are.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0A0A0B] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7ED957]/[0.12]"><Users className="h-5 w-5 text-[#7ED957]" /></div>
              <p className="text-sm leading-relaxed text-white/60"><span className="font-bold text-white">Flexible delivery.</span> Roll out to a student cohort, residential community, workplace, member network or broader young adult audience.</p>
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/[0.12]"><Dumbbell className="h-5 w-5 text-[#60A5FA]" /></div>
              <p className="text-sm leading-relaxed text-white/60"><span className="font-bold text-white">A connected wellbeing ecosystem.</span> Partnerships with leading health and wellbeing brands and gyms can extend support, access and value beyond the app.</p>
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-white/[0.09] bg-[#0A0A0B] p-6 sm:p-8" data-reveal="right" data-delay="1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ED957]">What a StrengthHub partnership can include</p>
            <div className="mt-6 grid gap-4">
              {partnershipBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7ED957]"><Check className="h-3 w-3 text-[#0A0A0B]" strokeWidth={3} /></span>
                  <p className="text-sm leading-relaxed text-white/[0.68] sm:text-[15px]">{benefit}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#7ED957] px-6 py-4 text-sm font-bold text-[#0A0A0B] transition hover:bg-[#9FE264] sm:w-auto">
              Discuss a partnership rollout
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheStudio;
