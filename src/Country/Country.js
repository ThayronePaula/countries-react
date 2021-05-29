import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Country.module.scss";
import { ReactComponent as Arrow } from "../assets/left-arrow.svg";

const Country = () => {
  const [country, setCountry] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const countryApi = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setCountry(json);
    };
    countryApi(`https://restcountries.eu/rest/v2/alpha/${id}`);
  }, [id]);

  if (!country) return null;

  return (
    <section className="animeLeft">
      <Link to="/" className={styles.click}>
        <button className={styles.back}>
          <Arrow />
          <p>Back</p>
        </button>
      </Link>

      <div className={styles.firstCountry} key={country.numericCode}>
        <div className={styles.wrapper}>
          <img src={country.flag} alt={country.name} />
        </div>
        <div className={styles.leftContent}>
          <h2>{country.name}</h2>
          <div className={styles.description}>
            <div>
              <h4>
                Native name: <span> {country.nativeName} </span>
              </h4>
              <h4>
                Population: <span> {country.population} </span>
              </h4>
              <h4>
                Region: <span> {country.region} </span>
              </h4>
              <h4>
                Sub Region: <span> {country.subregion} </span>
              </h4>
              <h4>
                Capital: <span> {country.capital} </span>
              </h4>
            </div>

            <div>
              <h4>
                Top Level Domain: <span> {country.topLevelDomain} </span>
              </h4>

              {country.currencies.map(({ name }) => (
                <h4 key={name}>
                  Currencies: <span>{name}</span>
                </h4>
              ))}
              <h4>
                Languages:
                <span>{country.languages.map(({ name }) => `${name} `)}</span>
              </h4>
            </div>
          </div>
          <div className={styles.borderCountry}>
            <span>Border Countries:</span>
            {country.borders.map((country) => (
              <Link to={`/country/${country.toLowerCase()}`} key={country}>
                {country}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;
