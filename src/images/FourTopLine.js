import React from "react";

const FourTopLine = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 559 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M280 0V10.5C280 27.0685 266.569 40.5 250 40.5H32C15.4315 40.5 2 53.9315 2 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M280 0V10.5C280 27.0685 266.569 40.5 250 40.5H217C200.431 40.5 187 53.9315 187 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M280 0V10.5C280 27.0685 293.431 40.5 310 40.5H527C543.569 40.5 557 53.9315 557 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
      <path
        d="M280 0V10.5C280 27.0685 293.431 40.5 310 40.5H344C360.569 40.5 374 53.9315 374 70.5V91"
        stroke={color}
        stroke-opacity="0.5"
        stroke-width="4"
      />
    </svg>
  );
};

export default FourTopLine;
