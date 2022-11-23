import React from "react";
import { Link } from "react-router-dom";

import { IconFolder } from "components/icons";

const CampaignCategory = ({ categoryName, isSmall = true }) => {
  return (
    <Link
      to="/"
      className={`${
        isSmall ? "text-xs" : "text-sm"
      } flex items-center mb-3 font-medium gap-x-3 text-text3`}
    >
      <IconFolder />
      <span>{categoryName}</span>
    </Link>
  );
};

export default CampaignCategory;
