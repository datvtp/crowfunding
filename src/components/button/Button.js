import React from "react";
import PropTypes from "prop-types";

import { Loading } from "components/loading";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...props
}) => {
  const child = !!isLoading ? <Loading /> : children;

  let defaultButtonClassName =
    "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";

  switch (props.kind) {
    case "primary":
      defaultButtonClassName =
        defaultButtonClassName + " bg-primary text-white";
      break;

    case "secondary":
      defaultButtonClassName =
        defaultButtonClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultButtonClassName =
        defaultButtonClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;

    default:
      break;
  }

  if (props.href)
    return (
      <Link to={props.href} className={`${defaultButtonClassName}`}>
        {children}
      </Link>
    );

  return (
    <button
      className={`${defaultButtonClassName} ${
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
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
