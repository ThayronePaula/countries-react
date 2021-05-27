import React from "react";
import styles from './Select.module.scss'

const Select = ({value,setValue  ,options }) => {

  return (
    <select className={styles.select}  value={value} onChange={({ target }) => setValue(target.value)}>
      <option value='' >Filter by Region</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
