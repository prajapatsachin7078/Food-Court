/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { RestaurantCard } from "./RestaurantCard";
import { promotedRestaurantCard } from "./PromotedRestaurant";

export const RestaurantCardContainer = ({ result }) => {
  // Higher-order component for promoted cards
  const PromotedRestaurantCard = promotedRestaurantCard(RestaurantCard);

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {result.map((item) => (
          <Link
            className="block transform hover:scale-105 transition-transform duration-200 shadow-md rounded-lg overflow-hidden bg-white"
            style={{ width: "14em" }} 
            key={item.info.id}
            to={`/restaurant/${item.info.id}`}
          >
            {item.info.isOpen ? (
              <PromotedRestaurantCard item={item.info} />
            ) : (
              <RestaurantCard item={item.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
