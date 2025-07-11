"use client";

interface CopyIconProps {
  className?: string;
}

export default function CopyIcon({ className }: CopyIconProps) {
  return (
    <svg 
      className={className}
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="transparent" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
} 