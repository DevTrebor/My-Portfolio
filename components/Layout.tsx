"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "@/assets/logo1.png";
import Button from "@/components/animation/NavButton"; // Adjust the path based on your project structure


type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  { name: "About", href: "#about", type: "button" },
  { name: "Projects", href: "#projects", type: "button" },
  { name: "Contact", href: "#contact", type: "button" },
  
];


  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Website" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Header */}
        <header className="border-b border-slate-800 sticky top-0 backdrop-blur bg-slate-950/80 z-50">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            {/* Replace Name with Image Logo */}
          <div className="flex items-center">
  <button
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false); // 👈 closes sidebar if open
    }}
    className="block cursor-target"
  >
    <Image
      src={logo}
      alt="Portfolio Logo"
      width={100}
      height={100}
    />
  </button>
</div>


            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-4 text-sm items-center">
  {navLinks.map((link) => (
    <li key={link.name}>
      <Button label={link.name} href={link.href} />
    </li>
  ))}
</ul>


            {/* Hamburger Button */}
            <button
              className="md:hidden text-slate-100 focus:outline-none cursor-target"
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
              <span className="font-semibold text-lg ">Menu</span>
              <button
                className="text-slate-100 focus:outline-none "
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

          <ul className="mt-4 flex flex-col gap-4 px-4 text-slate-100">
  {navLinks.map((link, index) => (
    <li key={index}>
      <Button
        label={link.name}
        href={link.href}
        onClick={() => setIsOpen(false)} // close menu on click
      />
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