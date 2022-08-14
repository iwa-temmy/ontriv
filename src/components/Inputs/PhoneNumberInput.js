import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";

const PhoneNumberInput = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const data = require("../../utils/CountryData.json");
    console.log(data);
    setCountries(data);
  }, []);
  return (
    <div className="d-flex justify-content-between w-100">
      <Input type="select" defaultValue="" className="w-25 mr-4">
        <option value="">Select Country Code</option>
        {countries?.map((country) => {
          return (
            <option
              key={country.name}
              value={country.dial_code}
            >{`${country.dial_code} (${country.name})`}</option>
          );
        })}
      </Input>
      <Input text="text" name="phone" style={{ width: "74%" }} />
    </div>
  );
};

export default PhoneNumberInput;
