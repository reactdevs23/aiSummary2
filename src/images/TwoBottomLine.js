import React from "react";

const TwoBottomLine = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 416 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62.4999 9.5C62.4999 55.5 1.52562 58 1.52517 97.88"
        stroke={color}
      />
      <path
        d="M62.5 9C62.5 50.6681 102.636 70.4999 102.636 98.3319"
        stroke={color}
      />
      <path
        d="M62.5 8.99988C62.4995 50.5512 204.789 48.9999 204.789 98.4485"
        stroke={color}
      />
      <path
        d="M354.004 9.5C354.004 55.5 414.978 58 414.979 97.88"
        stroke={color}
      />
      <path
        d="M354.004 9C354.004 50.6681 313.868 70.4999 313.868 98.3319"
        stroke={color}
      />
      <path
        d="M354.004 8.99988C354.004 50.5512 211.715 48.9999 211.715 98.4485"
        stroke={color}
      />
    </svg>
  );
};

export default TwoBottomLine;
