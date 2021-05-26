import React from "react";

export const CountryContext = React.createContext();

export const MainContext = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  React.useEffect(() => {
    async function contries() {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const json = await response.json();
      console.log(json);
      setData(json);
    }
    contries();
  }, []);

  return (
    <CountryContext.Provider value={{ data, search, setData, setSearch }}>
      {children}
    </CountryContext.Provider>
  );
};
