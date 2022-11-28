import { Button } from "components/button";
import React, { Fragment } from "react";

import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import CampaignPerk from "../modules/campaign/CampaignPerk";
import CampaignSupport from "../modules/campaign/CampaignSupport";
import CampaignCategory from "../modules/campaign/CampaignCategory";
import CampaignDescription from "../modules/campaign/CampaignDescription";
import CampaignBanner from "../modules/campaign/CampaignBanner";
import CampaignMeta from "../modules/campaign/CampaignMeta";
import CampaignTitle from "../modules/campaign/CampaignTitle";
import CampaignViewAuthor from "../modules/campaign/CampaignViewAuthor";

import { defaultImg } from "constants/global";

const CampaignView = () => {
  return (
    <Fragment>
      <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10 gradient-banner">
        <h1>Education</h1>
      </div>

      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignBanner className="!h-[398px] mb-8" />
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src={defaultImg}
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  alt=""
                />
              ))}
          </div>
        </div>

        <div className="flex-1 max-w-[443px]">
          <CampaignCategory categoryName="Architecture" className="text-sm" />
          <CampaignTitle
            title="Remake - We Make architecture exhibition"
            className="mb-4 text-xl font-bold"
          />
          <CampaignDescription
            description="Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation"
            className="mb-6 text-sm"
          />
          <CampaignViewAuthor />

          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
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
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-y border-y-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
          <span className="cursor-pointer text-text3">Risks</span>
          <span className="cursor-pointer text-text3">FAQ</span>
          <span className="cursor-pointer text-text3">Updates</span>
          <span className="cursor-pointer text-text3">Comments</span>
        </div>
        <Button className="text-white bg-primary">Back this project</Button>
      </div>

      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>

        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>

      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
