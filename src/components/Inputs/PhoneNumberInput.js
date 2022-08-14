import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";

const PhoneNumberInput = ({name, placeholder, onChange}) => {
  const [countries, setCountries] = useState([]);
  

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
        className="phone-selectdropdown py-3"
        onChange={onChange}
      >
        <option value="">Country Code</option>
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
        name={name}
        onChange={onChange}
        className="phone-inputField py-3"
        placeholder={placeholder}
        maxLength="10"
      />
    </div>
  );
};

export default PhoneNumberInput;
