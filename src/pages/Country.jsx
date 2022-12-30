import React from "react";

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

//icons
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const BorderNeighbor = ({ neighbor }) => {
  return (
    <span key={neighbor} className="p-2 border-2 dark:bg-dark-blue min-w-[80px] text-center">
      {neighbor}
    </span>
  );
};

const Country = () => {
  const { id } = useParams();
  const url = "https://restcountries.com/v3.1/name/" + id;
  const { data, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  return (
    <div className="xl:w-[1280px] w-full px-8 my-12 sm:px-20 sm:my-15 xl:px-0 text-left">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <button
          className="flex items-center py-1 px-6 gap-2 dark:text-dark-mode-text shadow-[0px_0px_5px_0px_rgba(66,68,90,1)] shadow-black dark:bg-dark-blue"
          onClick={() => navigate(-1)}
        >
          <HiOutlineArrowNarrowLeft /> Back
        </button>
      )}
      {data &&
        data.map((country) => (
          <div
            key={country.name.common}
            className="grid xl:grid-cols-2 xl:mt-[80px] mt-5 dark:text-dark-mode-text xl:gap-24 items-center"
          >
            <img
              src={country.flags.svg}
              alt={`flag-of-${country.name.common}`}
              className="block flex-1 aspect-[160/140]"
            />
            <div className="grid xl:grid-rows-[1fr,2fr,1fr] grid-rows-[1fr,3fr,auto] items-center ">
              <span className="font-bold text-2xl">{country.name.common}</span>
              <div className="flex xl:flex-row xl:gap-2 gap-10 flex-col justify-between leading-8">
                <div>
                  <p>
                    <strong>Native Name:</strong> {country.name.official}
                  </p>
                  <p>
                    <strong>Population:</strong> {country.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {country.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Top Level Domain:</strong> {country.tld.join(", ")}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    {findCurrency(country.currencies)}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {findLanguages(country.languages)}
                  </p>
                </div>
              </div>
              <span className="mt-10 font-bold">Border Countries:</span>{" "}
              <div className="flex flex-wrap gap-1">
   
                {!country.borders ? <span>No Friends :( </span> : country.borders.map((neighbor) => (
                  <BorderNeighbor neighbor={neighbor} />
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

function findCurrency(obj) {
  const mainObj = Object.keys(obj)[0];
  return obj[mainObj].name;
}

function findLanguages(obj) {
  const languages = Object.values(obj);
  return languages.join(", ");
}

export default Country;
