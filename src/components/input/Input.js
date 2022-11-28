import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "components/common";

const Input = ({
  control,
  name,
  type,
  error = "",
  placeholder = "",
  children,
  className = "",
  ...props
}) => {
  const { field } = useController({ control, name, defaultValue: "" });

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder={error.length > 0 ? "" : placeholder}
        {...field}
        {...props}
        className={`w-full px-6 py-4 bg-transparent text-sm font-medium border rounded-xl text-text1 dark:text-white placeholder:text-text4 dark:placeholder:text-text2 ${
          error.length > 0
            ? "border-error"
            : "border-strock dark:border-darkStrockColor"
        } ${children ? "pr-16" : ""} ${className}`}
      />
      <span
        className={`absolute right-6 ${
          error.length > 0 ? "top-1/3" : "top-2/4"
        } -translate-y-2/4 cursor-pointer select-none`}
      >
        {children}
      </span>
      {error.length > 0 && (
        <span className="text-sm font-medium pointer-events-none text-error">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
  children: PropTypes.node,
};

export default withErrorBoundary(Input, { FallbackComponent: ErrorComponent });
