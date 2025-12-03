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
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/your-username/portfolio",
  },
  {
    title: "Project 2",
    description: "Short description of what this project does.",
    tech: ["React", "Node.js"],
    link: "https://example.com",
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
      <section id="about" className="space-y-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-slate-300">
          I&apos;m a skilled Full Stack Developer with experience designing, developing, and
deploying scalable web applications. I work confidently across front-end and back-
end technologies, building efficient APIs, intuitive user interfaces, and robust system
architectures. I enjoy solving complex problems, writing clean and maintainable
code, and collaborating to deliver high-quality digital solutions.
        </p>
        <p className="text-slate-300">
          My main stack <br/> <span className="text-slate-300">
  Front-end: <span className="text-cyan-300">Next.js</span>,{" "}
  <span className="text-cyan-300">React</span>,{" "}
  <span className="text-cyan-300">Tailwind CSS</span>
  <br />
  Back-end: <span className="text-cyan-300">Python</span>,{" "}
  <span className="text-cyan-300">Django</span>
  <br />
  Database: <span className="text-cyan-300">PostgreSQL</span>
  <br />
  Version Control:{" "}
  <span className="text-cyan-300">Git &amp; GitHub</span>
</span>
        </p>

        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0f0f0f62"
        ariaLabel="Technology partners"
      />
      
    </div>
  


      </section>

      {/* Projects */}
      <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-slate-800 rounded-lg p-4 bg-slate-900/40 hover:border-cyan-500/60 transition cursor-target"
            >
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-slate-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3 ">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-xs">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-cyan-400 hover:underline"
                    target="_blank"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="text-cyan-400 hover:underline"
                    target="_blank"
                  >
                    Code
                  </a>
                )}
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