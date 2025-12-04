"use client";
import React from "react";
import styled from "styled-components";


type FancyButtonProps = {
  href: string;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
};



export default function FancyButton(props: FancyButtonProps) {
  return (
    <StyledWrapper>
      <a
        href={props.href}
        download={props.download}
        className={`btn ${props.className || ''}`}
      >
        {props.children}
      </a>
    </StyledWrapper>
  );
}



const StyledWrapper = styled.div`
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;
    font-size: 0.95em;
    cursor: pointer;
    background-color: #171717;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: all 0.4s;
    text-decoration: none;
  }

  .btn:hover {
    transform: translateY(-10px);
    box-shadow:
      0 7px 0 -2px #a016bcff,
      0 15px 0 -4px #39a2db,
      0 16px 10px -3px #39a2db;
  }

  .btn:active {
    transition: all 0.2s;
    transform: translateY(-5px);
    box-shadow:
      0 2px 0 -2px #f85959,
      0 8px 0 -4px #39a2db,
      0 12px 10px -3px #39a2db;
  }
`;
