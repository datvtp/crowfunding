import React from "react";

const CampaignMeta = ({ amount, description, isSmall = true }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={`${
          isSmall ? "text-sm" : "text-xl"
        } font-semibold text-text2`}
      >
        {amount}
      </h4>
      <span className={`${isSmall ? "text-xs" : "text-base"} text-text4`}>
        {description}
      </span>
    </div>
  );
};

export default CampaignMeta;
