"use client"; // <- Add this at the top

import React, { useState } from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <Head>
        <title>Jhon Robert Lopez | Portfolio</title>
        <meta name="description" content="Portfolio of Jhon Robert Lopez" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Header */}
        <header className="border-b border-slate-800 sticky top-0 backdrop-blur bg-slate-950/80 z-50">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <span className="font-semibold tracking-tight">Jhon Robert Lopez</span>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-slate-100 focus:outline-none"
              onClick={() => setIsOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </header>

        {/* Sidebar & Overlay */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ${
            isOpen ? "visible" : "invisible"
          }`}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <aside
            className={`fixed top-0 left-0 h-full w-64 bg-slate-900 shadow-xl transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center px-4 py-4 border-b border-slate-800">
              <span className="font-semibold text-lg">Menu</span>
              <button
                className="text-slate-100 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="mt-4 flex flex-col gap-2 px-4 text-slate-100">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-2 py-2 rounded hover:bg-slate-800 hover:text-cyan-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Main content */}
        <main className="max-w-5xl mx-auto px-4 py-10 space-y-24">{children}</main>

        <footer className="border-t border-slate-800 mt-10">
          <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-400">
            © {new Date().getFullYear()} Jhon Robert Lopez. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
