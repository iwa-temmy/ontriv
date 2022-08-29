 import React, { useState } from "react";
import {socialChannelOptions, socialChannelData} from "./utils"
import HorizontalTab from "../../../components/horizontaltab";

const SocialChannels = () => {
  const [socialChannel, setSocialChannel] =
    useState("INSTAGRAM");

  const onChangeWalletTransaction = (value) => {
    console.log(value)
    const selectedValue = value;
    setSocialChannel(selectedValue);
  };
  return (
    <div>
      <HorizontalTab
        options={socialChannelOptions}
        onChange={onChangeWalletTransaction}
      />
      <div>{socialChannelData[socialChannel]}</div>
    </div>
  );
};

export default SocialChannels;