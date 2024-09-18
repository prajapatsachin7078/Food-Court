
import ShimmerLoader from "./ShimmerLoader";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenuInfo, categories] = useRestaurantMenu(resId);

  if (!resMenuInfo) {
    return <ShimmerLoader />;
  }

  return (
    <div className="container mx-auto mt-8 w-11/12 lg:w-3/4">
      {resMenuInfo && (
        <div className="mb-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-4">
                <h5 className="text-2xl font-bold mb-2">{resMenuInfo.name}</h5>
                <p className="text-gray-700 mb-2">
                  <strong>Location:</strong> {resMenuInfo.locality}, {resMenuInfo.areaName}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Average Rating:</strong> {resMenuInfo.avgRatingString} ⭐ ({resMenuInfo.totalRatingsString})
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Cuisines:</strong> {resMenuInfo.cuisines.join(', ')}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Cost for Two:</strong> {resMenuInfo.costForTwoMessage}
                </p>
                <p className="text-gray-700">
                  <strong>Discount:</strong> {resMenuInfo.aggregatedDiscountInfo?.header}
                </p>
              </div>
              <div className="md:w-1/3 flex items-center justify-center p-4">
                <img
                  className="h-52 w-52 object-cover rounded-full shadow-lg"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resMenuInfo.cloudinaryImageId}`}
                  alt={resMenuInfo.name}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="accordion" id="accordionExample">
        {categories && categories.map((item, index) => (
          <ItemCategory key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
