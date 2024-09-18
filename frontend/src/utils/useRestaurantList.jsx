import { useState, useEffect } from "react";

const useRestaurantList = (coordinates) => {
  const [searchText, setSearchText] = useState('');
  const [resData, setResData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (coordinates.lat && coordinates.lon) {
      fetchData();
    }
  }, [coordinates]);

  const filterTopRatedRestaurants = () => {
    if (isFiltered) {
      setFilteredData(resData);
    } else {
      const topRated = resData.filter(data => data.info.avgRating > 4);
      setFilteredData(topRated);
    }
    setIsFiltered(!isFiltered);
  };

  const filterData = (text) => {
    const searchTextLower = text.toLowerCase();
    const filteredList = resData.filter(data => data.info.name.toLowerCase().includes(searchTextLower));
    setFilteredData(filteredList);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates.lat}&lng=${coordinates.lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
      const json = await response.json();

      const restaurantsData = json?.data?.cards?.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setResData(restaurantsData);
      setFilteredData(restaurantsData);
    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  };

  return [searchText, setSearchText, filterTopRatedRestaurants, filterData,isFiltered, filteredData];
};

export default useRestaurantList;
