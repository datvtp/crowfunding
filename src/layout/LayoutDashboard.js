import React from "react";

import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <DashboardTopbar />
      <div className="flex items-start gap-x-10">
        <DashboardSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
