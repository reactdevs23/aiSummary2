import React from "react";

const FiveTopLine = ({ color }) => {
  return (
    <svg
      width="780"
      height="91"
      viewBox="0 0 740 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="387"
        y1="7"
        x2="387"
        y2="89"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M387 0V10.5C387 27.0685 373.569 40.5 357 40.5H32C15.4315 40.5 2 53.9315 2 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M387 0V10.5C387 27.0685 373.569 40.5 357 40.5H217C200.431 40.5 187 53.9315 187 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M387 0V10.5C387 27.0685 400.431 40.5 417 40.5H708C724.569 40.5 738 53.9315 738 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M387 0V10.5C387 27.0685 400.431 40.5 417 40.5H523C539.569 40.5 553 53.9315 553 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
    </svg>
  );
};

export default FiveTopLine;
