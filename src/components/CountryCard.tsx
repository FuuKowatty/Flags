import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <Link to={`/name/${country.name.common}`}>
      <div className="White w-[250px] h-[350px] shadow-md dark:bg-dark-blue">
        <img
          src={country.flags.png}
          alt="flag-image"
          className="w-[250px] h-[180px]"
        />
        <span className="font-bold text-xl text-center block pt-5 min-h-[80px]">
          {country.name.common}
        </span>
        <div className="px-5">
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
