import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Menu, X, Github, Linkedin, Mail,
  MonitorSmartphone, Smartphone, PanelsTopLeft, Code2, Layers3,
  ExternalLink, Sparkles
} from "lucide-react";

import ProjectCard from "./components/ProjectCard.jsx";
import SkillCard from "./components/SkillCard.jsx";

const navItems = ["About", "Skills", "Projects", "Contact"];

const skills = [
  { icon: PanelsTopLeft, name: "Front-End Development", description: "Building responsive, accessible, and user-friendly web interfaces." },
  { icon: MonitorSmartphone, name: "Responsive Web Design", description: "Creating layouts that adapt smoothly across desktop, tablet, and mobile." },
  { icon: Smartphone, name: "Mobile-First UI", description: "Designing clear and intuitive experiences for smaller screens first." },
  { icon: Code2, name: "React Development", description: "Developing reusable components and interactive user interfaces with React." },
  { icon: Layers3, name: "UI Implementation", description: "Turning design concepts into consistent layouts and reusable components." },
  { icon: Sparkles, name: "Modern CSS & Tailwind", description: "Styling interfaces with utility-first CSS, clean structure, and maintainable patterns." },
];

const projects = [
  {
    number: "01", category: "WEB APPLICATION", title: "Responsive Website",
    description: "A responsive website concept focused on clear content hierarchy, intuitive navigation, and a consistent experience across screen sizes.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    accent: "from-cyan-400/20 to-blue-500/5",
    icon: PanelsTopLeft,
    link: ""
  },
  {
    number: "02", category: "MOBILE-FIRST DESIGN", title: "Mobile Interface Concept",
    description: "A mobile-first interface concept with simplified navigation, readable typography, and touch-friendly interactive elements.",
    stack: ["React", "Tailwind CSS", "Responsive UI"],
    accent: "from-violet-400/20 to-fuchsia-500/5",
    icon: Smartphone,
    link: ""
  },
  {
    number: "03", category: "FRONT-END PROJECT", title: "Interactive Web UI",
    description: "A component-based front-end project demonstrating reusable UI elements, interactive states, and structured page layouts.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    accent: "from-emerald-400/20 to-teal-500/5",
    icon: Code2,
    link: ""
  },
];

function SectionTitle({ label, title, text }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 text-xs font-bold tracking-[.2em] text-mint">{label}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">{text}</p>}
    </div>
  );
}


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" onClick={closeMenu} className="font-display text-2xl font-bold tracking-tighter text-white">JC<span className="text-mint">.</span></a>
          <button className="rounded-lg border border-white/10 p-2 text-white md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[76px] flex-col gap-5 border-b border-white/10 bg-ink px-6 py-6 text-sm text-slate-300 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
            {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="transition hover:text-mint">{item}</a>)}
            <a href="#contact" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 rounded-lg bg-mint px-4 py-2.5 font-semibold text-ink transition hover:bg-white">Let’s talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="section-grid relative">
          <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_.8fr]">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/5 px-4 py-2 text-[10px] font-bold tracking-[.16em] text-mint">
                <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_#70e2c6]" /> FRONT-END DEVELOPER · WEB & MOBILE
              </div>
              <p className="text-sm font-medium tracking-wide text-slate-400">HELLO, I’M JOHN AMIEL CAPISTRANO</p>
              <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.06] tracking-[-.06em] text-white sm:text-6xl lg:text-7xl">
                I build for the <span className="text-mint">web.</span><br />
                I design for <span className="text-mint">people.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
                I’m an IT professional focused on front-end development, responsive websites, and mobile-friendly interfaces. I enjoy turning ideas into clean, functional, and engaging digital experiences.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-3 rounded-lg bg-mint px-5 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white">Explore my work <ArrowUpRight size={17} /></a>
                <a href="#contact" className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-mint/50 hover:text-mint">Contact me <Mail size={16} /></a>
              </div>
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-semibold tracking-[.16em] text-slate-500">
                <span>REACT.JS</span><span>TAILWIND CSS</span><span>JAVASCRIPT</span><span>RESPONSIVE UI</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-5 rounded-[2rem] bg-mint/10 blur-3xl" />
              <div className="relative rounded-[1.7rem] border border-white/10 bg-[#101922]/90 p-6 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] tracking-[.16em] text-slate-500"><span>PORTFOLIO / PROFILE</span><span className="text-mint">● AVAILABLE</span></div>
                <div className="section-grid my-8 flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-mint/10 to-blue-500/5">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full border border-mint/30 bg-[#0b171b] font-display text-5xl font-bold tracking-tighter text-white shadow-[0_0_70px_rgba(112,226,198,.12)]">JC<span className="text-mint">.</span></div>
                </div>
                <h2 className="font-display text-2xl font-semibold text-white">John Amiel Capistrano</h2>
                <p className="mt-2 text-sm text-slate-400">Front-End Developer · Web & Mobile</p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[.03] p-4"><MonitorSmartphone className="mb-3 text-mint" size={20} /><p className="text-xs font-semibold text-white">Web Experiences</p><p className="mt-1 text-[11px] text-slate-500">Responsive & modern</p></div>
                  <div className="rounded-xl border border-white/10 bg-white/[.03] p-4"><Smartphone className="mb-3 text-mint" size={20} /><p className="text-xs font-semibold text-white">Mobile UI</p><p className="mt-1 text-[11px] text-slate-500">Mobile-first thinking</p></div>
                </div>
              </div>
            </div>
            <a href="#about" className="absolute bottom-7 left-5 hidden items-center gap-2 text-[10px] tracking-[.16em] text-slate-500 sm:flex sm:left-8">SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionTitle label="01 / ABOUT ME" title="Focused on the front end." text="I bring an IT background and a practical problem-solving mindset to building digital products." />
          <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr]">
            <div className="space-y-5 text-sm leading-8 text-slate-400">
              <p className="font-display text-2xl leading-relaxed tracking-tight text-white">My goal is to create web and mobile experiences that feel simple, intuitive, and enjoyable to use.</p>
              <p>I hold a Bachelor of Science in Information Technology and have more than eight years of professional experience in IT and technical work. That experience helped me develop a structured approach to troubleshooting, learning new technologies, and solving problems.</p>
              <p>My current focus is front-end development: building responsive interfaces, reusable React components, and clean layouts with modern CSS tools such as Tailwind CSS.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-panel p-6">
              {[["FOCUS", "Front-End Development"], ["PLATFORMS", "Web & Mobile"], ["FRAMEWORK", "React.js"], ["STYLING", "Tailwind CSS"], ["LOCATION", "Philippines"]].map(([label, value]) => <div key={label} className="border-b border-white/10 py-4 last:border-0"><p className="text-[10px] font-bold tracking-[.16em] text-slate-500">{label}</p><p className="mt-2 text-sm font-semibold text-white">{value}</p></div>)}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/5 bg-[#0c131a]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionTitle label="02 / SKILLS & TECHNOLOGIES" title="Tools I use to build." text="Core front-end areas and technologies I work with and continue to develop." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, i) => <SkillCard key={skill.name} cardNumber={i} skill={skill} />)}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design", "Git", "REST APIs"].map(tag => <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300">{tag}</span>)}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionTitle label="03 / FEATURED PROJECTS" title="Selected front-end work." text="A showcase for web applications, responsive layouts, and mobile-first interfaces. Replace these starter cards with your actual projects and repository links." />
          <div className="grid gap-5 lg:grid-cols-3">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
          <p className="mt-6 text-xs leading-6 text-slate-500">Project cards are starter examples, not claims of completed client work. Add screenshots, live demos, and GitHub links for projects you have personally built.</p>
        </section>

        <section id="contact" className="border-t border-white/5 bg-[#0c131a]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <div className="rounded-3xl border border-mint/20 bg-gradient-to-br from-mint/10 via-[#101922] to-[#101922] p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <p className="text-xs font-bold tracking-[.2em] text-mint">04 / GET IN TOUCH</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Have a project in mind?</h2>
                <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400">I’m open to front-end development opportunities and collaborations involving responsive websites, web applications, and mobile-friendly interfaces.</p>
              </div>
              <div className="mt-9 flex shrink-0 flex-col items-start gap-5 lg:mt-0">
                {/* Replace the sample email and social URLs with your own before publishing. */}
                <a href="mailto:j.a.capistrano@gmail.com" className="inline-flex items-center gap-3 rounded-lg bg-mint px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-white">Let’s connect <ArrowUpRight size={17} /></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-mint"><Github size={18} /> GitHub <ExternalLink size={13} /></a>
                <a href="https://www.linkedin.com/in/john-amiel-capistrano-aa3b0012a/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-mint"><Linkedin size={18} /> LinkedIn <ExternalLink size={13} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-xs text-slate-500 sm:px-8">
        <a href="#home" className="font-display text-xl font-bold tracking-tighter text-white">JC<span className="text-mint">.</span></a>
        <span>© {new Date().getFullYear()} John Amiel Capistrano</span>
        <a href="#home" className="tracking-widest transition hover:text-mint">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}