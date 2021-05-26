import React from "react";

export const CountryContext = React.createContext();

export const MainContext = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [continent, setContinent] = React.useState("");

  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    async function contries() {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const json = await response.json();
      console.log(json);
      setData(json);
    }
    contries();
  }, []);

  const searchLower = search.toLowerCase();
  const dataFilter =
    data && data.filter(({ name }) => name.toLowerCase().includes(searchLower));
  const region = data && data.filter(({ region }) => region === continent);

  const continentName = [
    "Africa",
    "Asia",
    "Americas",
    "Europe",
    "Oceania",
    "Polar",
  ];

  return (
    <CountryContext.Provider
      value={{
        data,
        dataFilter,
        search,
        continentName,
        continent,
        setContinent,
        setData,
        setSearch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
