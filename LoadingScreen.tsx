import { useEffect, useRef } from 'react';

const Articles = () => {
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

  const articles = [
    {
      title: 'The Science of Effective Online Personal Training',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      desc: 'Discover how virtual coaching combines advanced technology with proven training principles to deliver results that match or exceed training in person.',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8555781/',
      alt: 'Person training with online guidance',
      date: 'January 15, 2024',
    },
    {
      title: 'Building Sustainable Fitness Habits',
      image: 'https://images.pexels.com/photos/4058220/pexels-photo-4058220.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      desc: 'Learn the psychology behind lasting lifestyle changes and how personalized coaching helps create habits that stick for the long term.',
      link: 'https://www.healthline.com/nutrition/how-to-build-healthy-habits',
      alt: 'Healthy lifestyle habits',
      date: 'February 8, 2024',
    },
    {
      title: 'Why Personalization Matters in Fitness',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      desc: 'Generic workout plans fail because everyone is unique. Explore how customized training programs accelerate your progress and prevent burnout.',
      link: 'https://www.verywellfit.com/benefits-of-personal-training-1231142',
      alt: 'Personalized fitness coaching',
      date: 'March 3, 2024',
    },
  ];

  const renderArticle = (article: typeof articles[0], index: number) => (
    <article
      key={index}
      className="fade-in bg-[#111] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#A3E635]/40 transition-colors duration-300"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={article.image}
          alt={article.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 brightness-75"
        />
      </div>
      <div className="px-6 pt-4 text-sm text-white/40">{article.date}</div>
      <div className="p-6 pt-2 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white">{article.title}</h3>
        <p className="text-white/60 mb-4">{article.desc}</p>
        <a
          href={article.link}
          className="text-[#A3E635] font-semibold hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more →
        </a>
      </div>
    </article>
  );

  return (
    <section id="articles" className="section bg-[#111]" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6 text-3xl font-bold text-white">Insights</h2>
          <p className="fade-in text-lg text-white/60">
            Expert perspectives and coaching knowledge to help you train smarter and achieve lasting results.
          </p>
        </div>

        <div className="md:hidden overflow-x-auto -mx-4 px-4">
          <div className="flex space-x-6 snap-x snap-mandatory">
            {articles.map((article, index) => (
              <div key={index} className="min-w-[85%] snap-center">
                {renderArticle(article, index)}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => renderArticle(article, index))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
