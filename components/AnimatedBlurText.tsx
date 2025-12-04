'use client';

import BlurText from './BlurText';

type AnimatedBlurTextProps = {
  text: string;
  className?: string;
};

export default function AnimatedBlurText({ text, className }: AnimatedBlurTextProps) {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <BlurText
      text={text}
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className={`text-base mb-8 text-slate-300 font-sans ${className || ''}`}
    />
  );
}

