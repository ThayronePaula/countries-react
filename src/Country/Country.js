import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Country.module.scss";

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
    countryApi(`https://restcountries.eu/rest/v2/name/${id}`);
  }, [id]);

  if (!country) return null;
  return (
    <section>
      <Link to="/">
        <button>Back</button>
      </Link>

      {country.map((item) => (
        <div className={styles.firstCountry} key={item.numericCode}>
          <div className={styles.wrapper}>
            <img src={item.flag} alt={item.name} />
          </div>
          <div className={styles.leftContent}>
            <h2>{item.name}</h2>
            <div className={styles.description}>
              <div>
                <h4>
                  Native name: <span> {item.nativeName} </span>
                </h4>
                <h4>
                  Population: <span> {item.population} </span>
                </h4>
                <h4>
                  Region: <span> {item.region} </span>
                </h4>
                <h4>
                  Sub Region: <span> {item.subregion} </span>
                </h4>
                <h4>
                  Capital: <span> {item.capital} </span>
                </h4>
              </div>

              <div>
                <h4>
                  Top Level Domain: <span> {item.topLevelDomain} </span>
                </h4>

                {item.currencies.map(({ name }) => (
                  <h4 key={name}>
                    Currencies: <span>{name}</span>
                  </h4>
                ))}
                <h4>
                  Languages: <span>{item.languages.map(({name}) => `${name} `)}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Country;
