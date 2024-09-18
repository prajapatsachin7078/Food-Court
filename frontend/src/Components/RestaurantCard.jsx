/* eslint-disable react/prop-types */

export const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, totalRatingsString, avgRatingString, cuisines, sla } = props.item;
  const { slaString } = sla;
  const truncatedCuisines = cuisines.slice(0, 4);

  return (
    <div className="relative bg-white rounded-lg ">
      <div className="relative aspect-w-4 aspect-h-3">
        <img
          className="object-cover w-full h-full"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="Card image cap"
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-semibold">{name}</h5>
        <p className="text-gray-600 mt-1">{truncatedCuisines.join(', ')}</p>
        <p
          className={`mt-2 inline-block px-3 py-1 text-sm font-medium rounded ${
            avgRatingString <= 4 ? 'bg-gray-600 text-white' : 'bg-green-500 text-white'
          }`}
        >
          {avgRatingString} ⭐ ({totalRatingsString})
        </p>
        <p className="mt-2 text-gray-500 text-sm">Delivery in - {slaString}</p>
      </div>
    </div>
  );
};
