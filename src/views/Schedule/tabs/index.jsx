 import React, { useState } from "react";
import {socialChannelOptions, socialChannelData} from "./utils"
import HorizontalTab from "../../../components/horizontaltab";
// import { useParams } from "react-router-dom";
// import { Heading } from "../../../../pages/Business/style";
// import HorizonalTab from "../../../common/HorizontalTab";
// import { pendingDocumentToTableTab, pendingDocumentOptions } from "./utils";

// type TPendingDocument =
//   | "NODOCUMENTAPPROVED"
//   | "NONEAPPROVEDOCUMENT"
//   | "PARTIALLYAPPROVEDDOCUMENT"
//   | "DOCUMENTAPPROVED"
//   | "UPLOADEDANDAPPROVEDDOCUMENT";

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
        defaultValue="NODOCUMENTAPPROVED"
      />
      <div>{socialChannelData[socialChannel]}</div>
    </div>
  );
};

export default SocialChannels;