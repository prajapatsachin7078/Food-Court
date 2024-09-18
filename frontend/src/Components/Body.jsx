import  { useContext } from "react";
import { RestaurantCardContainer } from "./RestaurantCardContainer";
import ShimmerLoader from "./ShimmerLoader";
import useRestaurantList from "../utils/useRestaurantList";
import SearchCityContext from "../utils/context/SearchCityContext";
import useSearchCityRes from "../utils/useSearchCityRes";

const Body = () => {
  const { cityName } = useContext(SearchCityContext); // Get cityName from context
  const coordinates = useSearchCityRes(cityName); // Get coordinates for the cityName
  const [searchText, setSearchText, filterTopRatedRestaurants, filterData, isFiltered, filteredData] = useRestaurantList(coordinates);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <button
          className="w-full md:w-auto py-2 px-4 bg-transparent border border-gray-400 text-gray-600 hover:bg-gray-200 rounded-lg"
          onClick={filterTopRatedRestaurants}
        >
          {isFiltered ? "Show All Restaurants" : "Top-rated restaurants"}
        </button>

        <form
          className="flex items-center w-full md:w-auto"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            filterData(searchText);
          }}
        >
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="search"
            placeholder="Search Restaurant"
            aria-label="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              filterData(e.target.value);
            }}
          />
          <button
            className="ml-3 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {filteredData.length === 0 ? <ShimmerLoader /> : <RestaurantCardContainer result={filteredData} />}
    </div>
  );
};

export default Body;
