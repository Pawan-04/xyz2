const Education = () => {
  return (
    <section className="bg-[#050505] py-24 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tighter">
            Academic & Achievements
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8 font-light">
            Currently pursuing MCA from 
            <span className="text-white font-medium"> Bennett University (The Times Group)</span> 
            with a CGPA of <span className="text-white font-medium">9+</span>. 
            Also qualified the 
            <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">
              {" "}TCS NQT 2026 (Off-Campus) 
            </span> for <span className="text-white font-medium"> Ninja Profile </span>
            and actively improving problem-solving skills using 
            <span className="text-white font-medium"> C++</span> and 
            <span className="text-white font-medium"> Python</span>.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl text-xs font-bold text-gray-500 uppercase tracking-widest">
              CGPA: 9+
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl text-xs font-bold text-gray-500 uppercase tracking-widest">
              TCS NQT: Qualified
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
          <h4 className="text-white font-bold mb-4">Certifications</h4>
          <ul className="text-sm text-slate-300 space-y-3 font-light">
            <li className="flex items-center gap-2">✔ <a href="https://drive.google.com/file/d/1bJa17SkEu_iqz_tbq4UeaJuMXtZnfX9I/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">Front-end Domination</a> </li>
            <li className="flex items-center gap-2">✔ <a href="https://drive.google.com/file/d/1Pf98x2fiLJod5CjfvpNkpVDteMc6JJNs/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">Infosys: NLP  using Python</a> </li>
            <li className="flex items-center gap-2">✔ <a href="https://coursera.org/verify/UUV0MBHJKXTN" target="_blank" rel="noopener noreferrer" className="hover:underline">Generative AI: Introduction and Applications</a> </li>
            <li className="flex items-center gap-2">✔ <a href="https://drive.google.com/file/d/1ZadWPqNt3fEZ-43l7uM2mdCkUFNBQvlP/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">Introduction to Modern Database Systems</a> </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;