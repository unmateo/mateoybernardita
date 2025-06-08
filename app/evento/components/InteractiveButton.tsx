'use client';

import { ReactNode } from 'react';

interface InteractiveButtonProps {
  message: string;
  children: ReactNode;
  className?: string;
}

export default function InteractiveButton({ message, children, className }: InteractiveButtonProps) {
  return (
    <a 
      href="#" 
      className={className}
      onClick={(e) => {
        e.preventDefault();
        alert(message);
      }}
    >
      {children}
    </a>
  );
} 