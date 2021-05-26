import React from "react";

const Select = ({value,setValue  ,options }) => {

  return (
    <select value={value} onChange={({ target }) => setValue(target.value)}>
      <option >None</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
