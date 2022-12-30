import React from "react";

//router
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div className="White w-[250px] h-[350px] shadow-md dark:bg-dark-blue">
      <img src={country.flags.png} alt="flag-image" className="w-[250px] h-[180px] " />
      <span className="font-bold text-xl text-center block pt-5 min-h-[80px]">
        <Link to={`/name/${country.name.common}`}>{country.name.common}</Link> 
      </span>
      <div className="px-5" >
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital}</p>
      </div>
    </div>
  );
};

export default Country;
