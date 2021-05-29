import React from "react";
import { DebounceInput } from "react-debounce-input";
import { CountryContext } from "../CountryContext";
import styles from './Input.module.scss'

const Input = () => {
  const { seach, setSearch } = React.useContext(CountryContext);
  return (
    <DebounceInput
      className={styles.seachInput}
      value={seach}
      minLength={3}
      debounceTimeout={300}
      onChange={({ target }) => setSearch(target.value)}
      placeholder='Search for a country...'
    />
  );
};
export default Input;
