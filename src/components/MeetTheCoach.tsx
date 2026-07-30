import { Dumbbell, GraduationCap, Lightbulb, Users } from 'lucide-react';

const credentials = [
  {
    icon: Dumbbell,
    title: '7+ years of training experience',
    description: 'Practical experience across strength, body composition and sustainable lifestyle change.',
  },
  {
    icon: GraduationCap,
    title: 'Built from inside young adult life',
    description: 'Founded by a university student who understands exams, commuting, work and changing routines.',
  },
  {
    icon: Users,
    title: 'Designed around young adults',
    description: 'The platform is built to feel achievable and useful, not like another obligation young people fail to maintain.',
  },
  {
    icon: Lightbulb,
    title: 'Focused on independence',
    description: 'The goal is to help young people understand fitness and wellbeing well enough to make confident choices themselves.',
  },
];

const MeetTheCoach = () => {
  return (
    <section id="story" className="bg-[#0A0A0B] py-20 text-white sm:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative" data-reveal="left">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#7ED957]/[0.08] blur-[55px]" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#121214]">
              <img
                src="/founder-zak-upright.jpg"
                alt="Zak Sztrochlic, founder of StrengthHub Online"
                width={900}
                height={1200}
                className="h-[360px] w-full object-cover object-[35%_center] sm:h-[520px]"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-20">
                <p className="text-xl font-black text-white">Zak Sztrochlic</p>
                <p className="mt-1 text-sm font-semibold text-[#7ED957]">Founder, StrengthHub Online</p>
              </div>
            </div>
          </div>

          <div data-reveal="right" data-delay="1">
            <p className="eyebrow">Our story</p>
            <h1 className="section-heading mt-4">Created because better health support should feel accessible.</h1>
            <blockquote className="mt-7 border-l-2 border-[#7ED957] pl-5 text-lg leading-relaxed text-white/[0.72] sm:text-xl">
              “I built StrengthHub because many students want to improve their health but do not have a clear, affordable or sustainable place to start.”
            </blockquote>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {credentials.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#7ED957]/20 bg-[#7ED957]/10">
                    <Icon className="h-[1.125rem] w-[1.125rem] text-[#7ED957]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/45">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheCoach;
