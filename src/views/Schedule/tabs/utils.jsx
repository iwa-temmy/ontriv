import FacebookPost from "./socialChannel/Facebook";
import InstagramPost from "./socialChannel/InstagramPost";
import LinkedinPost from "./socialChannel/Linkedin";

const socialChannelData = {
    INSTAGRAM: (<InstagramPost/>),
    FACEBOOK: <FacebookPost/>,
    TWITTER: <h1>Twitter</h1>,
    LINKEDIN: <LinkedinPost/>
  };
  
  const socialChannelOptions = [
    { label: "Instagram", value: "INSTAGRAM" },
    { label: "Facebook", value: "FACEBOOK" },
    { label: "Twitter", value: "TWITTER" },
    { label: "Linkedin", value: "LINKEDIN" },
  ];
  
  export { socialChannelData, socialChannelOptions };