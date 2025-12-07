"use client";

import React from "react";
import styled from "styled-components";

interface Props {
  isSending: boolean;
  isSent: boolean;
}

// const palette = {
//   primary: "#22d3ee",
//   secondary: "#6366f1",
//   success: "#16a34a", // green for sent
//   danger: "#ef4444",
//   neutralDark: "#0f172a",
//   neutralLight: "#e2e8f0",
// };


const Button = ({ isSending, isSent }: Props) => {
  const text = "Send Message";

  return (
    <StyledWrapper>
      <button
        className={`button ${isSending ? "sending" : ""} ${isSent ? "sent" : ""} cursor-target`}
        disabled={isSending}
        type="submit"
      >
        <div className="outline" />

        {/* DEFAULT STATE */}
        <div className="state state--default">
          <div className="icon">✈️</div>
           <p>
  {text.split(" ").map((word, wordIndex) => (
    <span className="word" key={wordIndex} style={{ marginRight: "8px" }}>
      {word.split("").map((letter, letterIndex) => (
        <span
          key={letterIndex}
          style={{ "--i": letterIndex } as React.CSSProperties}
          className="letter"
        >
          {letter}
        </span>
      ))}
    </span>
  ))}
</p>

        </div>

        {/* SENDING STATE */}
        <div className="state state--sending">
          <div className="icon spinner" />
          <p>Sending...</p>
        </div>

        {/* SENT STATE */}
        <div className="state state--sent">
          <div className="icon">✔️</div>
          <p>Sent!</p>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --primary: #22d3ee;
    --neutral-1: #1e293b;
    --neutral-2: #334155;
    --radius: 14px;

    cursor: pointer;
    border-radius: var(--radius);
    border: none;

    background: #0f172a;
    color: #e2e8f0;

    min-width: 200px;
    height: 68px;
    padding: 20px;

    font-size: 18px;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    transition: background 0.3s ease, box-shadow 0.3s ease;
  }

  .button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  /* Icon & text states */
  .button .state {
    position: absolute;
    opacity: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: opacity 0.3s ease;
  }

  .button .state--default {
    opacity: 1;
  }

  /* Animated letters */
  .state p span {
    display: inline-block;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* Hover animations */
  .button:hover:not(:disabled) .state--default .icon {
    animation: planeTakeOff 0.8s forwards;
  }

  .button:hover:not(:disabled) .state--default p span {
    animation: letterWave 0.8s forwards;
    animation-delay: calc(var(--i) * 0.05s);
  }

  /* Spinner for sending state */
  .spinner {
    width: 18px;
    height: 18px;
    border: 3px solid #22d3ee;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Plane flying animation */
  @keyframes planeTakeOff {
    0% {
      transform: translateX(0) translateY(0) rotate(0deg) scale(1.25);
      opacity: 1;
    }
    50% {
      transform: translateX(60px) translateY(-20px) rotate(20deg) scale(1.3);
      opacity: 1;
    }
    100% {
      transform: translateX(150px) translateY(-50px) rotate(45deg) scale(0);
      opacity: 0;
    }
  }

  /* Letter wave animation */
  @keyframes letterWave {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-15px);
      color: var(--primary);
    }
    100% {
      opacity: 0;
      transform: translateY(-30px);
    }
  }

  /* Sending and sent states */
  .button.sending .state--default {
    opacity: 0;
  }
  .button.sending .state--sending {
    opacity: 1;
  }

  .button.sent {
    background: #1d4ed8;
    color: white;
  }
  .button.sent .state--default,
  .button.sent .state--sending {
    opacity: 0;
  }
  .button.sent .state--sent {
    opacity: 1;
  }
`;

export default Button;
