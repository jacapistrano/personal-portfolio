import { experiences } from "../assets/descriptions.js";

export default function Experience() {
  return (
    <section id="experience" className="section-grid mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-mint">Experience</p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
        Where I've worked
      </h2>

      <div className="relative mt-12 border-l border-white/10 pl-8">
        {experiences.map((item, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            {/* timeline dot */}
            <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-mint ring-4 ring-[#080d12]" />

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-mint/10 to-blue-500/5 p-6 transition hover:border-mint/40">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <span className="text-sm text-white/60">{item.period}</span>
              </div>

              <p className="mt-1 text-mint">
                {item.company}
                <span className="text-white/40"> · {item.location}</span>
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                {item.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}