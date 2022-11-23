import React from "react";

import { defaultImg } from "constants/global";

const CampaignBanner = ({ banner = defaultImg, isSmall = true }) => {
  return (
    <div className={`${isSmall ? "h-[158px]" : "h-[266px]"}`}>
      <img
        src={banner}
        alt="campaign-img"
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampaignBanner;
