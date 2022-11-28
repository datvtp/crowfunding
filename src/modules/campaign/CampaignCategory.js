import React from "react";
import { Link } from "react-router-dom";

import { IconFolder } from "components/icons";

const CampaignCategory = ({ categoryName, isSmall = true, className = "" }) => {
  return (
    <Link
      to="/"
      className={`${
        isSmall ? "text-xs mb-3" : "text-sm mb-4"
      } flex items-center font-medium gap-x-3 text-text3 ${className}`}
    >
      <IconFolder />
      <span>{categoryName}</span>
    </Link>
  );
};

export default CampaignCategory;
