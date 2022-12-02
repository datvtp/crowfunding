import React, { useEffect } from "react";

import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import Gap from "components/common/Gap";
import useAxiosPrivate from "hooks/useAxiosPrivate";

const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axiosPrivate.get("/api/campaigns");
        console.log("fetchCampaigns ~ response", response);
      } catch (error) {
        console.log("fetchCampaigns ~ error", error);
      }
    }
    fetchCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
