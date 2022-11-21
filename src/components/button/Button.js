import React from "react";
import PropTypes from "prop-types";

import { Loading } from "components/loading";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...props
}) => {
  const child = !!isLoading ? <Loading /> : children;

  return (
    <button
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white min-h-[56px] ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      type={type}
      {...props}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
  isLoading: PropTypes.bool,
};

export default Button;
