const Services = () => {
  const services = [
    {
  title: "Service Now - ITSM",
  desc: "Designed and implemented ServiceNow workflows using Flow Designer, Business Rules, and Script Includes to automate ticket routing, approvals, and reduce manual intervention.",
  icon: "⚙️"
},
    {
  title: "Full-Stack Web Apps",
 desc: "Built MERN stack applications with responsive UI and backend features like authentication, APIs, and basic LLM integration.",
  icon: "🌐"
},
    {
      title: "API & Cloud Systems",
      desc: "Designed and implemented REST integrations and managed MongoDB databases to enable seamless data exchange and reliable backend performance.",
      icon: "☁️"
    }
  ];

  return (
    <section className="bg-[#050505] py-24 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all group">
            <div className="text-3xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">{service.icon}</div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-tight">{service.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services