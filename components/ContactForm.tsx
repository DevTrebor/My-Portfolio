"use client"; // <-- important, makes this a Client Component

import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_0garrdi", // your EmailJS Service ID
        "template_0u1d62m", // your EmailJS Template ID
        formRef.current,
        "xWOOYLPIv1BrEqbWB" // your EmailJS Public Key
      )
      .then(
        () => {
          alert("Your message has been sent!");
          formRef.current?.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-slate-300">Name</label>
        <input
          name="name"
          required
          type="text"
          className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-sm text-slate-300">Email</label>
        <input
          name="email"
          required
          type="email"
          className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          placeholder="Your email"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-sm text-slate-300">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          placeholder="Write your message..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-cyan-500 text-slate-950 font-medium rounded-md hover:bg-cyan-400 transition cursor-target"
      >
        Send Message
      </button>
    </form>
  );
}
