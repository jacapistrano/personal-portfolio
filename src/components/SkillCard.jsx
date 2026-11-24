function SkillCard({ cardNumber,skill}) {
return (
    <article key={skill.name} className="group rounded-2xl border border-white/10 bg-[#101922] p-6 transition hover:-translate-y-1 hover:border-mint/40">
        <div className="mb-8 flex items-center justify-between"><span className="text-xs text-slate-600">0{cardNumber + 1}</span><skill.icon className="text-mint transition group-hover:scale-110" size={23} strokeWidth={1.6} /></div>
        <h3 className="font-display text-lg font-semibold text-white">{skill.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{skill.description}</p>
    </article>)
}

export default SkillCard;