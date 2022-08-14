import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";

const PhoneNumberInput = ({onChange}) => {
  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCountryCode(value);
  };

  console.log(countryCode);

  useEffect(() => {
    const data = require("../../utils/CountryData.json");
    setCountries(data);
  }, []);
  return (
    <div className="d-flex justify-content-between w-100">
      <Input
        type="select"
        defaultValue=""
        name="country_code"
        className="phone-selectdropdown"
        onChange={handleInputChange}
      >
        <option value="">Select Country Code</option>
        {countries?.map((country) => {
          return (
            <option
              key={country.name}
              value={country.dial_code}
            >{`${country.dial_code} ${country.name}`}</option>
          );
        })}
      </Input>
      <Input
        text="text"
        name="phone_number"
        onChange={(e) => onChange(e, countryCode) }
        className="phone-inputField"
        placeholder="Phone Number"
        maxLength="10"
      />
    </div>
  );
};

export default PhoneNumberInput;
