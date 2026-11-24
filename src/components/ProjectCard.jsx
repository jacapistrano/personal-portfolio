import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  const Icon = project.icon;
  const CoverImage = project.cover;
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101922] transition duration-300 hover:-translate-y-1 hover:border-mint/40">
      <div className={`section-grid relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 opacity-50" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-black/20 text-mint shadow-2xl backdrop-blur">
            {CoverImage ? <img src={CoverImage} alt={project.title} className="h-full w-full object-cover" /> : <Icon size={34} strokeWidth={1.4} />}
        </div>
        <span className="absolute left-5 top-5 text-[10px] font-bold tracking-[.18em] text-slate-400">{project.category}</span>
        <span className="absolute right-5 top-5 font-display text-sm text-slate-500">{project.number}</span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map(item => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-300">{item}</span>)}
        </div>
        <div className="mt-6 border-t border-white/10 pt-4">
          {project.link
            ? <a className="inline-flex items-center gap-2 text-sm font-semibold text-mint hover:text-white" href={project.link} target="_blank" rel="noreferrer">View project <ExternalLink size={14} /></a>
            : <span className="text-xs text-slate-500">Add your project URL or GitHub repository</span>}
        </div>
      </div>
    </article>
  );
}


export default ProjectCard;