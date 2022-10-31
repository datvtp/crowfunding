import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({
  control,
  name,
  type,
  error = "",
  placeholder = "",
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
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 ${
          error.length > 0 ? "border-error" : "border-strock"
        }`}
      />
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
};

export default Input;
