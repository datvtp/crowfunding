import React from "react";

import LayoutDashboard from "layout/LayoutDashboard";
import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading className="mb-5">Popular campaigns</Heading>
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
