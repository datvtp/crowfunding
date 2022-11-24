import React from "react";

import CampaignBanner from "./CampaignBanner";
import CampaignCategory from "./CampaignCategory";
import CampaignDescription from "./CampaignDescription";
import CampaignMeta from "./CampaignMeta";
import CampaignTitle from "./CampaignTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampaignBanner isSmall={false} />
      <div className="flex-1 max-w-[435px]">
        <CampaignCategory categoryName="Architecture" isSmall={false} />
        <CampaignTitle
          title="Remake - We Make architecture exhibition"
          isSmall={false}
        />
        <CampaignDescription
          description="Remake - We Make: an exhibition about architecture's social
agency in the face of urbanisation"
          isSmall={false}
        />
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampaignMeta
            amount="$2,000"
            description="Raised of $2,500"
            isSmall={false}
          ></CampaignMeta>
          <CampaignMeta
            amount="173"
            description="Total backers"
            isSmall={false}
          ></CampaignMeta>
          <CampaignMeta
            amount="30"
            description="Days left"
            isSmall={false}
          ></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
