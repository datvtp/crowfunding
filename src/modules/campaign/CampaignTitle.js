import React from "react";

const CampaignTitle = ({ title, isSmall = true, className = "" }) => {
  return (
    <h3
      className={`${
        isSmall ? "mb-1 text-base" : "mb-4 text-xl"
      } font-semibold text-text1 ${className}`}
    >
      {title}
    </h3>
  );
};

export default CampaignTitle;
