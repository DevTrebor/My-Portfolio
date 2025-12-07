// Animation Imports
import TrueFocus from '@/components/animation/TrueFocus';
import TargetCursor from '@/components/animation/TargetCursor';
import FancyButton from "@/components/animation/FancyButton";
// Component Imports
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import TechStackCard from "@/components/TechStackCard";
import LogoLoop from '@/components/LogoLoop';
// Asset Imports
import profilePic from "@/assets/profile.jpg";
import portfolioImg from "@/assets/portfolio.png";
import htImg from "@/assets/HT.png";
// Icon Imports
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPython, 
  SiDjango, 
  SiPostgresql, 
  SiGit, 
  SiGithub 
} from "react-icons/si";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string | StaticImageData;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Reactbits"],
    github: "https://github.com/DevTrebor/My-Portfolio.git",
    image: portfolioImg,
  },
  {
    title: "Dental Clinic Website",
    description: "Short description of what this project does.",
    tech: ["React", "Node.js"],
    link: "https://heveanlytouch.netlify.app",
    image: htImg,
  },
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];


export default function Home() {
  return (
    <Layout>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />

      {/* Hero */}
      <section className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Full Stack Developer</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I&apos;m{' '}
            <span className="inline-block align-baseline text-cyan-400">
              <TrueFocus
                sentence="Jhon Robert"
                manualMode={false}
                blurAmount={5}
                borderColor="#B589D6"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </span>
          </h1>
          <p className="text-slate-300 max-w-xl">Turning ideas into clean, functional applications.</p>
          <div className="flex gap-3">
            
<div className="flex flex-wrap gap-3 justify-center md:justify-start">
  <FancyButton href="#projects" className="cursor-target">
    View Projects
  </FancyButton>

  <FancyButton href="#contact" className="cursor-target">
    Contact Me
  </FancyButton>

  <FancyButton href="/CV.pdf" download className="cursor-target">
    Download CV
  </FancyButton>
</div>


</div>
        </div>
        <div className="flex-1 flex justify-center">
  <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px]">
    <div className="h-full w-full rounded-full overflow-hidden bg-slate-950">
      <Image src={profilePic} alt="Profile picture" className="object-cover h-full w-full" priority />
    </div>
  </div>
</div>

      </section>

      {/* About */}
      <section id="about" className="space-y-6 py-10"> 
     <h2 className="text-2xl font-semibold tracking-tight">ABOUT</h2>
        <p className="text-slate-300 max-w-3xl leading-relaxed">  
          I&apos;m a Full Stack Developer specializing in building clean, functional, and scalable web applications. I enjoy working across both front-end and back-end technologies, crafting intuitive interfaces, efficient APIs, and reliable system architectures.
          </p>
        {/* Tech Stack Card – Styled Component Version */}
        <div className="max-w-2xl">
  <TechStackCard />
</div>



        {/* Logo Strip */}
        <div className="pt-4">
          <LogoLoop logos={techLogos} speed={90} direction="left" logoHeight={40} gap={32} hoverSpeed={0} scaleOnHover={false} fadeOut fadeOutColor="#0f0f0f9a" className="opacity-80 cursor-target" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-8 py-10">
     <h2 className="text-2xl font-semibold tracking-tight">PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article key={project.title} className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 cursor-target">
              {project.image && (
                <div className="w-full h-40 overflow-hidden bg-slate-950">
                  <Image src={project.image} alt={project.title} width={600} height={300} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              )}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm pt-2">
                  {project.link && <a href={project.link} target="_blank" className="text-cyan-400 hover:underline">Live →</a>}
                  {project.github && <a href={project.github} target="_blank" className="text-cyan-400 hover:underline">Code →</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-14 space-y-10">
   <h2 className="text-2xl font-semibold tracking-tight">CONTACT</h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left - Contact Links */}
          <div className="space-y-6">
            <p className="text-slate-300">Want to work together or just say hi? Feel free to reach out through any platform.</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-slate-800 text-cyan-400 text-lg"><FaEnvelope /></div>
                <a href="mailto:jhonlopez0724@gmail.com" className="text-cyan-400 hover:underline cursor-target">jhonlopez0724@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-slate-800 text-cyan-400 text-lg"><FaGithub /></div>
                <a href="https://github.com/DevTrebor" target="_blank" className="text-cyan-400 hover:underline cursor-target">github.com/DevTrebor</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-slate-800 text-cyan-400 text-lg"><FaLinkedin /></div>
                <a href="https://www.linkedin.com/in/jrobertlopez" target="_blank" className="text-cyan-400 hover:underline cursor-target">linkedin.com/in/jrobertlopez</a>
              </li>
            </ul>
          </div>

          {/* Right - Contact Form */}
          <div className="border border-slate-800 bg-slate-900/40 rounded-lg p-6 space-y-5">
  <h3 className="text-lg font-medium text-slate-200">Send me a message</h3>
  <ContactForm />
</div>
        </div>
      </section>

    </Layout>
  );
}
