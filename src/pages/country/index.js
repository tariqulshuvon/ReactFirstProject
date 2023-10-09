import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CountryInfo = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
            .then((res) => res.json())
            .then((data) => setCountry(data));
    }, []);

    return (
      <div className="container">
        <div className="row">
          {country.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="border border-primary my-3 p-3">
                <p>{item.name}</p>
                      <img className="img-fluid" src={item.flag}></img>
                      <Link className='btn btn-primary my-3' href={`/country/${item.name}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default CountryInfo;