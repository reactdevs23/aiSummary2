import React from "react";

const TwoTopLine = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 294 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M147 0V10.5C147 27.0685 133.569 40.5 117 40.5H32C15.4315 40.5 2 53.9315 2 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M147 0V10.5C147 27.0685 160.431 40.5 177 40.5H262C278.569 40.5 292 53.9315 292 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
    </svg>
  );
};

export default TwoTopLine;
