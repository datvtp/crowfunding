import React from "react";
import CampaignAuthor from "./CampaignAuthor";
import CampaignBanner from "./CampaignBanner";

import CampaignCategory from "./CampaignCategory";
import CampaignDescription from "./CampaignDescription";
import CampaignMeta from "./CampaignMeta";
import CampaignTitle from "./CampaignTitle";

const CampaignItem = () => {
  return (
    <div>
      <CampaignBanner />
      <div className="px-5 py-4">
        <CampaignCategory categoryName="Education" />
        <CampaignTitle title="Powered Kits Learning Boxes" />
        <CampaignDescription description="Fun, durable and reusable boxes with eco-friendly options." />
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampaignMeta amount="$2,000" description="Raised of $1,900" />
          <CampaignMeta amount="173" description="Total backers" />
        </div>
        <CampaignAuthor name="Mahfuzul Nabil" />
      </div>
    </div>
  );
};

export default CampaignItem;
