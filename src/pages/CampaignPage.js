import React from "react";

import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import { Button } from "components/button";
import Gap from "components/common/Gap";

const CampaignPage = () => {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl shadow-15%">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-secondary bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/abc" className="text-sm text-primary">
              Need any help? Learn More...
            </a>
          </div>
        </div>

        <Button
          type="button"
          kind="ghost"
          className="px-8"
          href="/start-campaign"
        >
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your campaigns</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature />
        <CampaignFeature />
        <CampaignFeature />
      </CampaignGrid>

      <Gap />
      <Button kind="ghost" className="mx-auto">
        <span>See more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
        </svg>
      </Button>
    </>
  );
};

export default CampaignPage;
