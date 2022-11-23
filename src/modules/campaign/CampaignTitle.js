import React from "react";

const CampaignTitle = ({ title, isSmall = true }) => {
  return (
    <h3
      className={`${
        isSmall ? "mb-1 text-base" : "mb-4 text-xl"
      } font-semibold text-text1`}
    >
      {title}
    </h3>
  );
};

export default CampaignTitle;
