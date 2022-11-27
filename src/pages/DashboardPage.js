import React from "react";

import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import Gap from "components/common/Gap";

const DashboardPage = () => {
  return (
    <>
      <Heading number={4}>Your campaigns</Heading>
      <CampaignFeature />

      <Gap />

      <Heading>Popular campaigns</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} />
          ))}
      </CampaignGrid>

      <Gap />

      <Heading>Recent campaigns</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} />
          ))}
      </CampaignGrid>
    </>
  );
};

export default DashboardPage;
