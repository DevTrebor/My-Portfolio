import Layout from "@/components/Layout";
import TrueFocus from '@/components/animation/TrueFocus';
import TargetCursor from '@/components/animation/TargetCursor';

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
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Full Stack Engineer
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
            I build fast, responsive web experiences using Next.js, React, and
            Tailwind CSS. I enjoy turning ideas into clean, production-ready
            interfaces.
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
            <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center text-4xl">
              JR
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="space-y-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-slate-300">
          I&apos;m a developer based in the Philippines, focused on building
          clean UI and smooth UX. I like working with modern JavaScript
          frameworks, design systems, and reusable components.
        </p>
        <p className="text-slate-300">
          My main stack includes <span className="text-cyan-300">Next.js</span>,{" "}
          <span className="text-cyan-300">React</span>, and{" "}
          <span className="text-cyan-300">Tailwind CSS</span>.
        </p>
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