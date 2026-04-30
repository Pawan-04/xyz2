const Experience = () => {
  const timeline = [
    {
      role: "ServiceNow Developer Intern",
      company: "Bangmetric LLC - Noida-63",
      period: "Nov 2025 - March 2026",
     details: "Focused on ITSM modules, Business Rules, UI Actions, JavaScript, and REST API integrations."
    },
    {
      role: "MERN Stack Focus",
      company: "Self",
      period: "Present",
      details: "Built small full-stack projects and practiced creating dashboard-style interfaces."
    }
  ];

  return (
    <section id="experience" className="bg-[#050505] py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.4em] mb-16 text-center">// Career Path</h2>
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-16 border-l border-white/10 pl-8 relative">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[6.5px] top-1 shadow-[0_0_10px_#2563eb]" />
              <div className="md:w-32 text-gray-600 font-mono text-xs pt-1">{item.period}</div>
              <div className="flex-1 ">
                <h3 className="text-white font-bold text-xl mb-1">{item.role}</h3>
                <a className="text-blue-400 text-sm mb-4 pointer" href="https://bangmetric.com/">{item.company}</a>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience