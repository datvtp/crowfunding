import React from "react";

const IconFolder = ({ props }) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="m6.878 4.5 1.5 1.5H15v7.5H3v-9h3.878ZM7.5 3H3c-.825 0-1.492.675-1.492 1.5l-.008 9c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5V6c0-.825-.675-1.5-1.5-1.5H9L7.5 3Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconFolder;
