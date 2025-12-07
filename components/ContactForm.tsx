"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Button from "@/components/animation/SendButton";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = formRef.current;
  if (!form) return;

  setIsSending(true);
  setIsSent(false);
  setError("");

  emailjs
    .sendForm(
      "service_0garrdi",
      "template_0u1d62m",
      form,
      "xWOOYLPIv1BrEqbWB"
    )
    .then(
      () => {
        setIsSending(false);
        setIsSent(true);
        form.reset();

        setTimeout(() => setIsSent(false), 4000);
      },
      () => {
        setIsSending(false);
        setError("Failed to send message. Please try again.");
      }
    );
};


  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-slate-300">Name</label>
        <input
          name="name"
          required
          type="text"
          className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-200 cursor-target"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-slate-300">Email</label>
        <input
          name="email"
          required
          type="email"
          className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-200 cursor-target"
          placeholder="Your email"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-slate-300">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-200 cursor-target resize-none"
          placeholder="Write your message..."
        />
      </div>

      {/* Animated Button */}
      <Button isSending={isSending} isSent={isSent} />

      {/* ✔ SUCCESS MESSAGE */}
      {isSent && (
        <p className="text-green-400 text-sm animate-fadeSlide">
          Your message has been sent successfully ✔
        </p>
      )}

      {/* ❌ ERROR MESSAGE */}
      {error && (
        <p className="text-red-400 text-sm animate-fadeSlide">
          {error}
        </p>
      )}

      {/* Animation */}
      <style jsx>{`
        .animate-fadeSlide {
          animation: fadeSlide 0.5s ease forwards;
        }
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </form>
  );
}
