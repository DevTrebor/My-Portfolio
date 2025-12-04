"use client";

type ButtonProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

const Button = ({ label, href, onClick }: ButtonProps) => {
  return (
    <a href={href} onClick={onClick}>
      <button
        className="relative py-2 px-8 text-white text-base font-bold
        overflow-hidden bg-transparent transition-all duration-300 ease-in-out 
        hover:scale-105 active:scale-95

        before:absolute before:top-0 before:-left-full before:w-full before:h-full 
        before:bg-gradient-to-r before:from-blue-500 before:via-cyan-400 before:to-blue-600
        before:transition-all before:duration-500 before:ease-in-out 
        before:z-[-1]

        hover:before:left-0 cursor-target"
      >
        {label}
      </button>
    </a>
  );
};

export default Button;
