import {
  MonitorSmartphone, Smartphone, PanelsTopLeft, Code2, Layers3, Sparkles
} from "lucide-react";

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
    number: "01", category: "MOBILE APPLICATION", title: "Home Service Mobile App Concept",
    description: "A home service mobile application concept designed for both iOS and Android platforms, featuring a clean interface and intuitive navigation.",
    stack: ["React Native", "JavaScript", "Mobile UI/UX", "Cross-Platform Development", "Redux", "XCode", "TestFlight"],
    accent: "from-cyan-400/20 to-blue-500/5",
    icon: Smartphone,
    link: "https://play.google.com/store/apps/details?id=ph.goodwork"
  },
  {
    number: "02", category: "FRONT-END PROJECT", title: "UI/UX Design Website",
    description: "A component-based front-end project demonstrating reusable UI elements, interactive states, and structured page layouts.",
    stack: ["React.js","Vue.js", "JavaScript", "Tailwind CSS"],
    accent: "from-emerald-400/20 to-teal-500/5",
    icon: PanelsTopLeft,
    link: "https://helixpay.ph/"
  },
  {
    number: "03", category: "MOBILE APPLICATION", title: "Airline Booking Mobile App Concept",
    description: "A mobile application concept for airline booking, designed to provide a seamless and user-friendly experience for travelers on both iOS and Android platforms.",
    stack: ["React Native", "JavaScript", "Mobile UI/UX", "Swift", "XCode", "TestFlight"],
    accent: "from-violet-400/20 to-fuchsia-500/5",
    icon: Smartphone,
    link: "https://dev.mangotours.com/mobile-app"
  },
  {
    number: "04", category: "FULLSTACK PROJECT", title: "User Management System",
    description: "A user management system built with React.js for the front-end and PHP for the back-end, featuring user authentication, role-based access control, and CRUD operations.",
    stack: ["React.js","PHP", "MySQL", "Tailwind CSS"],
    accent: "from-emerald-400/20 to-teal-500/5",
    icon: Code2,
    link: "https://github.com/jacapistrano/user-management-react-php"
  },
];


export { skills, projects };