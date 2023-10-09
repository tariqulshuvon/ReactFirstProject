import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CountryDetails = () => {
  const router = useRouter();
  const name = router.query.name;
  console.log("====================================");
  console.log(name);
  console.log("====================================");
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    if (name != undefined) {
      fetch(`https://restcountries.com/v2/name/${name}`)
        .then((res) => res.json())
        .then((data) => setCountryDetails(data));
    }
  }, [name]);

  return (
    <div>
      Name:{" "}
      {name != null && (
        <>
          <div className="border">
            <p>{countryDetails[0]?.name}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetails;
