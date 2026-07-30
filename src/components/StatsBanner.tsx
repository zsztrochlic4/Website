const moments = ['Exams', 'Placement', 'Casual work', 'Commuting', 'Tight budgets', 'Changing routines'];

const StatsBanner = () => {
  return (
    <section className="border-y border-white/[0.07] bg-[#101012] py-8">
      <div className="container" data-reveal>
        <p className="mobile-centred-note mb-5 text-center text-[10px] font-bold uppercase tracking-[0.26em] text-white/35">Designed around the parts of student and young adult life most fitness apps ignore</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {moments.map((moment) => (
            <span key={moment} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/65">
              {moment}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
