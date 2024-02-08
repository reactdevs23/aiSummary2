import React from "react";

const ThreeTopLine = ({ color }) => {
  return (
    <svg
      width="366"
      height="91"
      viewBox="0 0 366 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M183 0V10.5C183 27.0685 169.569 40.5 153 40.5H32C15.4315 40.5 2 53.9315 2 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M183 0V10.5C183 27.0685 196.431 40.5 213 40.5H334C350.569 40.5 364 53.9315 364 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <line
        x1="183"
        y1="7"
        x2="183"
        y2="89"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
    </svg>
  );
};

export default ThreeTopLine;
