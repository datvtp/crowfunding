import React from "react";

import { defaultImg } from "constants/global";

const CampaignAuthor = ({ avatar = defaultImg, name }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={avatar}
        alt="author-avt"
        className="object-cover w-8 h-8 rounded-full"
      ></img>
      <p className="text-xs text-text3">
        by <span className="font-semibold text-text2">{name}</span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
