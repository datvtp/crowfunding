import React from "react";

import LayoutDashboard from "layout/LayoutDashboard";
import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import Gap from "components/common/Gap";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading className="mb-5" number={4}>
        Your campaigns
      </Heading>
      <CampaignFeature />

      <Gap />

      <Heading className="mb-5">Popular campaigns</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} />
          ))}
      </CampaignGrid>

      <Gap />

      <Heading className="mb-5">Recent campaigns</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} />
          ))}
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashboardPage;
