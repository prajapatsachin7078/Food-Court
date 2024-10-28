import { useState, useEffect } from "react";

const useSearchCityRes = (cityName) => {
  const [coordinates, setCoordinates] = useState({});

  const fetchCity = () => {
    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${cityName}&format=json&apiKey=8d5ab62584304f90a4d99181c69b9f4d`
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result?.results?.length > 0) {
          setCoordinates({
            lat: result.results[0].lat,
            lon: result.results[0].lon,
            city: result.results[0].city
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCity();
  }, [cityName]); // Depend on cityName to refetch when it changes

  return coordinates;
};

export default useSearchCityRes;
