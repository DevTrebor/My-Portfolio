"use client";

import styled from "styled-components";

export default function TechStackCard() {
  return (
    <TechCard>
      <div className="card">
        <div className="tools">
          <div className="circle"><span className="red box" /></div>
          <div className="circle"><span className="yellow box" /></div>
          <div className="circle"><span className="green box" /></div>
        </div>

        <div className="card__content">
          <h3 className="text-lg font-medium text-slate-200 mb-4">Tech Stack</h3>

          <ul className="space-y-2 text-sm text-slate-300">
            <li><span className="font-medium text-slate-100">Front-end:</span> Next.js, React, TypeScript, Tailwind</li>
            <li><span className="font-medium text-slate-100">Back-end:</span> Python, Django</li>
            <li><span className="font-medium text-slate-100">Database:</span> PostgreSQL</li>
            <li><span className="font-medium text-slate-100">Version Control:</span> Git, GitHub</li>
          </ul>
        </div>
      </div>
    </TechCard>
  );
}

const TechCard = styled.div`
  .card {
    width: 100%;
    background-color: #011522;
    border-radius: 8px;
    border: 1px solid #0a2236;
    padding-bottom: 12px;
  }

  .tools {
    display: flex;
    align-items: center;
    padding: 10px;
    background: #0b2538;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .circle {
    padding: 0 4px;
  }

  .box {
    display: inline-block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }

  .card__content {
    padding: 20px;
  }
`;
