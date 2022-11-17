import React from "react";
import PropTypes from "prop-types";

const ButtonGoogle = ({ onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStrockColor"
    >
      <img srcSet="/Icon/Google.png 2x" alt="google-icon" />
      <span>Sign up with google</span>
    </button>
  );
};

ButtonGoogle.propTypes = { onClick: PropTypes.func };

export default ButtonGoogle;
