import React from "react";

interface ChevronUpProps {
  svgprops?: React.SVGProps<SVGSVGElement>;
  className?: string;
}

export const ChevronUp = ({ svgprops, className }: ChevronUpProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...svgprops}
  >
    <path
      d="M12.25 10.25L8 5.75L3.75 10.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
