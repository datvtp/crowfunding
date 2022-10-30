import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({ control, name, type, ...props }) => {
  const { field } = useController({ control, name, defaultValue: "" });

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        {...field}
        {...props}
        className="w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4"
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default Input;
