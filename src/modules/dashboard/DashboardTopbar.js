import React from "react";

import { Button } from "components/button";

import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";
import { Link } from "react-router-dom";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        </Link>

        <div className="w-full max-w-[460px]">
          <DashboardSearch />
        </div>
      </div>

      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund />
        <Button
          className="px-7"
          type="button"
          href="/start-campaign"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
