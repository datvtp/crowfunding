import React from "react";

const CampaignDescription = ({
  description,
  isSmall = true,
  className = "",
}) => {
  return (
    <p
      className={`${
        isSmall ? "mb-4 text-xs" : "mb-5 text-sm"
      } font-normal text-text3 ${className}`}
    >
      {description}
    </p>
  );
};

export default CampaignDescription;
