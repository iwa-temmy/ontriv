import SocialTableData from "./tableData";

const socialChannelData = {
    INSTAGRAM: (<SocialTableData/>),
    FACEBOOK: <h1>Facebook</h1>,
    TWITTER: <h1>Twitter</h1>,
    LINKEDIN: <h1>Linkedin</h1>,
  };
  
  const socialChannelOptions = [
    { label: "Instagram", value: "INSTAGRAM" },
    { label: "Facebook", value: "FACEBOOK" },
    { label: "Twitter", value: "TWITTER" },
    { label: "Linkedin", value: "LINKEDIN" },
  ];
  
  export { socialChannelData, socialChannelOptions };