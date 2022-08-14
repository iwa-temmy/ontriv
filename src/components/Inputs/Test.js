import React, { useState } from "react";
import PhoneNumberInput from "./PhoneNumberInput";

const Test = () => {
  const [formData, setForData] = useState({});
  const handlePhoneInputChange = (e, countryCode) => {
    const { name, value } = e.target;

    setForData({ ...formData, [name]: countryCode.concat("", value) });
  };
  return (
    <div>
      <PhoneNumberInput onChange={handlePhoneInputChange} />
    </div>
  );
};

export default Test;
