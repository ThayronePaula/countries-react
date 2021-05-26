import React from "react";
import { CountryContext } from "../CountryContext";
import styles from './Input.module.scss'

const Input = () => {
  const { seach, setSearch } = React.useContext(CountryContext);
  return (
    <input
      className={styles.seachInput}
      value={seach}
      onChange={({ target }) => setSearch(target.value)}
      placeholder='Search for a country...'
    />
  );
};
export default Input;
