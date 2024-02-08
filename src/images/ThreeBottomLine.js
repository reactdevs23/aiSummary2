import React from "react";

const ThreeBottomLine = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 416 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M390.5 12.4999C390.5 58.4999 412.485 61.0001 412.485 100.88"
        stroke={color}
      />
      <path
        d="M390.374 12.3319C390.374 54 311.374 73.5 311.374 101.332"
        stroke={color}
      />
      <path
        d="M390.221 12.4486C390.222 53.9999 209.221 52 209.221 101.449"
        stroke={color}
      />
      <path
        d="M24.5102 12.4999C24.5101 58.4999 2.52562 61.0001 2.52517 100.88"
        stroke={color}
      />
      <path
        d="M24.6362 12.3319C24.6362 54 103.636 73.5 103.636 101.332"
        stroke={color}
      />
      <path
        d="M24.7891 12.4486C24.7886 53.9999 205.789 52 205.789 101.449"
        stroke={color}
      />
      <path d="M208 12L207.5 101" stroke={color} />
      <path d="M208 12.0001C208 59.0001 107 71.0001 107 101" stroke={color} />
      <path
        d="M207.744 12.0001C207.744 59.0001 308.744 71.0001 308.744 101"
        stroke={color}
      />
    </svg>
  );
};

export default ThreeBottomLine;
