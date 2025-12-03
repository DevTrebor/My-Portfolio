import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "@/assets/profile.jpg";
import TrueFocus from '@/components/animation/TrueFocus';
import TargetCursor from '@/components/animation/TargetCursor';
// import GradientText from '@/components/animation/GradientText';
import LogoLoop from '@/components/LogoLoop';
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
  image?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/your-username/portfolio",
    image: "/projects/portfolio.png",
  },
  {
    title: "Project 2",
    description: "Short description of what this project does.",
    tech: ["React", "Node.js"],
    link: "https://example.com",
    image: "/projects/project2.png",
  },
];


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  // Back-end
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  // Database
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  // Version Control
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

export default function Home() {
  return (

 
 
    <Layout>
        <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      {/* Hero */}
      <section className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Full Stack Developer
          </p>



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
          <p className="text-slate-300 max-w-xl">
            Turning ideas into clean, functional applications.
          </p>
          <div className="flex gap-3">
  <a
    href="#projects"
    className="px-4 py-2 rounded-md bg-cyan-500 text-slate-950 text-sm font-medium hover:bg-cyan-400 transition cursor-target"
  >
    View projects
  </a>
  <a
    href="#contact"
    className="px-4 py-2 rounded-md border border-slate-700 text-sm hover:border-cyan-400 hover:text-cyan-400 transition cursor-target"
  >
    Contact me

  </a>
  <a
  href="/CV.pdf"
  download
  className="px-4 py-2 rounded-md bg-slate-800 border border-slate-600 text-sm hover:border-cyan-400 hover:text-cyan-400 transition cursor-target"
>
  Download CV
</a>

</div>
        </div>

        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
  <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px]">
    <div className="h-full w-full rounded-full overflow-hidden bg-slate-950">
      <Image
        src={profilePic}
        alt="Profile picture"
        className="object-cover h-full w-full"
        priority
      />
    </div>
  </div>
</div>
      </section>

     {/* About */}
<section id="about" className="space-y-6 py-10">
  <h2 className="text-2xl font-semibold tracking-tight">About</h2>

  <p className="text-slate-300 leading-relaxed max-w-2xl">
    I&apos;m a Full Stack Developer specializing in building clean, functional, and scalable
    web applications. I enjoy working across both front-end and back-end technologies,
    crafting intuitive interfaces, efficient APIs, and reliable system architectures.
  </p>

  {/* Minimal Tech Stack Card */}
  <div className="border border-slate-800 bg-slate-900/40 rounded-lg p-6 max-w-2xl space-y-4">
    <h3 className="text-lg font-medium text-slate-200">Tech Stack</h3>

    <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-3 text-sm text-slate-300">
      <p>
        <span className="font-medium text-slate-200">Front-end:</span>  
        <span className="text-cyan-300"> Next.js</span>, 
        <span className="text-cyan-300"> React</span>, 
        <span className="text-cyan-300"> TypeScript</span>,
        <span className="text-cyan-300"> Tailwind CSS</span>
      </p>

      <p>
        <span className="font-medium text-slate-200">Back-end:</span>  
        <span className="text-cyan-300"> Python</span>, 
        <span className="text-cyan-300"> Django</span>
      </p>

      <p>
        <span className="font-medium text-slate-200">Database:</span>  
        <span className="text-cyan-300"> PostgreSQL</span>
      </p>

      <p>
        <span className="font-medium text-slate-200">Version Control:</span>  
        <span className="text-cyan-300"> Git &amp; GitHub</span>
      </p>
    </div>
  </div>

  {/* Clean logo strip */}
  <div className="pt-4">
    <LogoLoop
      logos={techLogos}
      speed={90}
      direction="left"
      logoHeight={40}
      gap={32}
      hoverSpeed={0}
      scaleOnHover={false}
      fadeOut
      fadeOutColor="#0f0f0f9a"
      className="opacity-80 cursor-target"
    />
  </div>
</section>

      {/* Projects */}
<section id="projects" className="space-y-8 py-10">
  <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((project) => (
      <article
        key={project.title}
        className="
          group 
          rounded-xl 
          overflow-hidden 
          border border-slate-800 
          bg-slate-900/40 
          hover:border-cyan-500/60 
          transition-all
          duration-300 
          hover:-translate-y-1 
          hover:shadow-lg 
          hover:shadow-cyan-500/10 
          cursor-target
        "
      >
        {/* Project Image */}
        {project.image && (
          <div className="w-full h-40 overflow-hidden bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Text Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-slate-100">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 text-sm pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                Live →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                Code →
              </a>
            )}
          </div>
        </div>
      </article>
    ))}
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-slate-300">
          Want to work together or say hi? Reach out:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="font-medium text-slate-200">Email:</span>{" "}
            <a
              href="mailto:jhonlopez0724@gmail.com"
              className="text-cyan-400 hover:underline cursor-target"
            >
              jhonlopez0724@gmail.com
            </a>
          </li>
          <li>
            <span className="font-medium text-slate-200">GitHub:</span>{" "}
            <a
              href="https://github.com/DevTrebor"
              className="text-cyan-400 hover:underline cursor-target"
              target="_blank"
            >
              github.com/DevTrebor
            </a>
          </li>
          <li>
            <span className="font-medium text-slate-200">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/jrobertlopez"
              className="text-cyan-400 hover:underline cursor-target"
              target="_blank"
            >
              linkedin.com/in/jrobertlopez
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}