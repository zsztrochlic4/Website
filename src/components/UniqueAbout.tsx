import { Brain, CalendarRange, Dumbbell, Leaf, MessageCircle, Users } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Personalised training',
    body: 'Structured gym, home and bodyweight programs built around goals, experience, schedule and available equipment.',
    accent: '#7ED957',
  },
  {
    icon: Leaf,
    title: 'Nutrition made practical',
    body: 'Budget friendly recipes, simple meal guidance and daily check ins that build understanding without restrictive rules.',
    accent: '#F5A524',
  },
  {
    icon: Brain,
    title: 'Habits and wellbeing',
    body: 'Young adults can track movement, sleep, water, nutrition and training together, making progress easier to understand.',
    accent: '#8B5CF6',
  },
  {
    icon: CalendarRange,
    title: 'Plan Around Your Life',
    body: 'Busy periods can be planned in advance so training can pause, reduce or shift instead of simply falling apart.',
    accent: '#8B5CF6',
  },
  {
    icon: MessageCircle,
    title: 'Support when it matters',
    body: 'An in app coach helps young adults navigate training, routines and common barriers with clear educational guidance.',
    accent: '#3B82F6',
  },
  {
    icon: Users,
    title: 'Community connection',
    body: 'University, residence, society and partner organisation communities can share wins, join challenges and make healthy activity feel social.',
    accent: '#7ED957',
  },
];

const UniqueAbout = () => {
  return (
    <section id="platform" className="relative overflow-hidden bg-[#0A0A0B] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute right-[-12rem] top-10 h-[30rem] w-[30rem] rounded-full bg-[#7ED957]/5 blur-[100px]" />
      <div className="container relative">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow">The platform</p>
          <h1 className="section-heading mt-4">One place for the habits that shape young adult wellbeing.</h1>
          <p className="section-copy mt-5">
            StrengthHub does more than display workouts. It connects training, everyday habits, practical food education, progress and community so students and young adults can see how the pieces work together.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body, accent }, index) => (
            <article
              key={title}
              data-reveal="scale"
              data-delay={String((index % 3) + 1)}
              className="group rounded-[1.4rem] border border-white/[0.08] bg-[#121214] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}35` }}>
                <Icon className="h-5 w-5" style={{ color: accent }} strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueAbout;
