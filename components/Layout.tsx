import React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Jhon Robert Lopez | Portfolio</title>
        <meta name="description" content="Portfolio of Jhon Robert Lopez" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 sticky top-0 backdrop-blur bg-slate-950/80 z-20">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <span className="font-semibold tracking-tight">
              Jhon Robert Lopez
            </span>
            <ul className="flex gap-4 text-sm">
              <li><a href="#about" className="hover:text-cyan-400">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-10 space-y-24">
          {children}
        </main>

        <footer className="border-t border-slate-800 mt-10">
          <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-400">
            © {new Date().getFullYear()} Jhon Robert Lopez. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}