import { useState } from "react";

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import {findCurrency, findLanguages} from '../components/utilits'

const BorderNeighbor = ({ neighbor, onNeighbor }) => {

  return (
    <span
      key={neighbor}
      className="p-2 border-2 dark:bg-dark-blue min-w-[80px] text-center cursor-pointer"
      onClick={() => onNeighbor(neighbor)}
    >
      {neighbor}
    </span>
  );
};

const Country = () => {
  
  const { id } = useParams();
  const [url] = useState("https://restcountries.com/v3.1/name/" + id)
  const { data, isPending, error } = useFetch(url);

  const navigate = useNavigate();

  const loadNeighbor = async (neighbor) => {
    const url2 = await fetch('https://restcountries.com/v3.1/alpha/' + neighbor)
    const json = await url2.json()
    navigate(`/name/${json[0].name.common}`)
    location.reload()
  }

  return (

    <div className="xl:w-[1280px] w-full px-8 my-12 sm:px-20 sm:my-15 xl:px-0 text-left">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <button
          className="flex items-center py-1 px-6 gap-2 dark:text-dark-mode-text shadow-[0px_0px_5px_0px_rgba(66,68,90,1)] shadow-black dark:bg-dark-blue"
          onClick={() => {
            navigate('/')
         }}
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
            <div className="xl:w-[600px] xl:h-[400px]">
              <img
                src={country.flags.svg}
                alt={`flag-of-${country.name.common}`}
                className="flex-1 w-[100%] xl:h-[100%] object-cover xl:aspect-auto aspect-[7/5]"
              />
            </div>
            <div className="grid xl:grid-rows-[1fr,3fr,auto] grid-rows-[1fr,3fr,auto] items-center ">
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
              <div>
                <span className="mt-10 font-bold">Border Countries:</span>{" "}
                <div className="flex flex-wrap gap-1">
                  {!country.borders ? (
                    <span>No Friends :( </span>
                  ) : (
                    country.borders.map((neighbor) => (
                      <BorderNeighbor neighbor={neighbor} onNeighbor={loadNeighbor} />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};



export default Country;
