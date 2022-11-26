import React from "react";
import { NavLink } from "react-router-dom";

import {
  IconCampaign,
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";

const sideBarMenuLinks = [
  {
    icon: <IconDashboard />,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign />,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment />,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw />,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile />,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout />,
    title: "Logout",
    url: "/logout",
    onClick: () => {},
  },
  {
    icon: <IconDarkmode />,
    title: "Light/Dark",
    url: "/darkmode",
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-15% px-[14px] py-10 flex flex-col flex-shrink-0">
      {sideBarMenuLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? "bg-primary bg-opacity-20 flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-xl md:mb-7 last:mt-auto last:bg-white last:shadow-25% text-primary"
              : "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-xl md:mb-7 last:mt-auto last:bg-white last:shadow-25% text-text3"
          }
          end={link.url === "/"}
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
