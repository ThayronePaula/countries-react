import React from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../CountryContext";
import Input from "../Inputs/Input";
import Select from "../Inputs/Select";
import styles from "./Home.module.scss";

const Home = () => {
  const { filter, data, continentName, continent, setContinent } =
    React.useContext(CountryContext);

  if (data === null) return null;

  return (
    <section className="animeLeft">
      <div className={styles.searchField}>
        <Input />
        <Select
          options={continentName}
          value={continent}
          setValue={setContinent}
        />
      </div>

      <ul className={styles.card}>
        {filter &&
          filter.map(
            ({
              alpha3Code,
              name,
              flag,
              numericCode,
              population,
              region,
              capital,
            }) => (
              <li key={numericCode}>
                <Link to={`/country/${alpha3Code.toLowerCase()}`}>
                  <div className={styles.wrapper}>
                    <img src={flag} alt={name} />
                  </div>

                  <div className={styles.description}>
                    <h2>{name}</h2>
                    <h4>
                      Population: <span>{population}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </Link>
              </li>
            )
          )}
      </ul>
    </section>
  );
};

export default Home;
