import React from "react";

import { Button } from "components/button";

import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <div className="w-full max-w-[460px]">
          <DashboardSearch />
        </div>
      </div>

      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund />
        <Button className="bg-secondary px-7" type="button">
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
