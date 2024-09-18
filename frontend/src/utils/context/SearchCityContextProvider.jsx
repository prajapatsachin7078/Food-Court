import React, { useState } from "react";
import SearchCityContext from "./SearchCityContext";

const SearchCityContextProvider = ({ children }) => {
  const [cityName, setCityName] = useState("Noida");

  const handleCityNameUpdate = (name) => {
    setCityName(name);
  };

  return (
    <SearchCityContext.Provider value={{ cityName, handleCityNameUpdate }}>
      {children}
    </SearchCityContext.Provider>
  );
};

export default SearchCityContextProvider;
