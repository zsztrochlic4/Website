import { ArrowRight, Building2, LayoutDashboard, Sparkles } from 'lucide-react';

const sections = [
  {
    href: '/platform',
    icon: LayoutDashboard,
    eyebrow: 'Explore the platform',
    title: 'See how the app supports healthier young adult routines.',
    description: 'Training, nutrition, habits, progress and community are explained clearly in one focused product page.',
  },
  {
    href: '/universities',
    icon: Building2,
    eyebrow: 'For universities & organisations',
    title: 'A practical wellbeing platform for the young adults you support.',
    description: 'Explore flexible partnerships for universities, workplaces, community organisations, health and wellbeing brands, and gyms.',
  },
  {
    href: '/about',
    icon: Sparkles,
    eyebrow: 'Our story',
    title: 'Built from a genuine understanding of young adult life.',
    description: 'Learn why StrengthHub was created and the principles that put young adults first.',
  },
];

const HomeSections = () => {
  return (
    <section className="bg-[#0A0A0B] py-16 text-white sm:py-24">
      <div className="container">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow">Explore StrengthHub</p>
          <h2 className="section-heading mt-4">Find the detail you need, without the endless scroll.</h2>
          <p className="section-copy mt-5">
            The main story is now shorter. Choose the area most relevant to you and explore it on a focused page.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {sections.map(({ href, icon: Icon, eyebrow, title, description }, index) => (
            <a
              key={href}
              href={href}
              data-reveal="scale"
              data-delay={String(index + 1)}
              className="group flex min-h-[260px] flex-col rounded-[1.5rem] border border-white/[0.08] bg-[#121214] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7ED957]/35 hover:bg-[#151517] sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7ED957]/25 bg-[#7ED957]/10">
                <Icon className="h-5 w-5 text-[#7ED957]" />
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7ED957]">{eyebrow}</p>
              <h3 className="mt-3 text-xl font-black leading-tight tracking-[-0.025em] text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-white transition group-hover:text-[#9FE264]">
                View page <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSections;
