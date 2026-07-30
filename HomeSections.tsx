import { useEffect, useRef } from 'react';
import { Dumbbell, Heart, Target } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section bg-[#0a0a0a] py-20" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6 text-3xl font-bold text-white">
            <span className="text-[#A3E635]">Strength</span>
            <span className="text-white">Hub</span>
            <span className="text-[#A3E635]">Online</span>
          </h2>
          <p className="fade-in text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            We connect clients worldwide with expert online personal trainers. Our coaching is built on scientific programming, accountability, and results you can see.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#A3E635]/50 transition-colors duration-300">
            <Dumbbell className="w-12 h-12 text-[#A3E635] mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Tailored Programming</h3>
            <p className="text-white/60">
              Every training plan is built around your goals, schedule, and fitness level. There are no generic templates, just coaching designed for you.
            </p>
          </div>

          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#A3E635]/50 transition-colors duration-300" style={{ transitionDelay: '0.2s' }}>
            <Heart className="w-12 h-12 text-[#A3E635] mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Dedicated Support</h3>
            <p className="text-white/60">
              Your coach is available every step of the way, from onboarding to regular check ins, keeping you on track and motivated throughout your journey.
            </p>
          </div>

          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#A3E635]/50 transition-colors duration-300" style={{ transitionDelay: '0.4s' }}>
            <Target className="w-12 h-12 text-[#A3E635] mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Focused on Results</h3>
            <p className="text-white/60">
              We measure success by your progress. Our coaches are invested in your outcomes, not just your subscription.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
