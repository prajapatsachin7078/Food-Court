/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/redux/cartSlice';

function FoodItem({ info }) {
  const { imageId, name, description, price, defaultPrice, ratings, cloudinaryImageId } = info;
  const { rating, ratingCount } = ratings?.aggregatedRating;
  const dispatch = useDispatch();
  
  const handleAddItem = () => {
    dispatch(addItems(info));
  };

  return (
    <div className="flex flex-col md:flex-row items-center border rounded-lg mb-4 p-4">
      <div className="flex-1">
        <h5 className="font-semibold text-lg">{name}</h5>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm text-gray-700">Price: {defaultPrice ? defaultPrice / 100 : price / 100} INR</p>
        <p className="text-sm text-gray-500">Ratings: {rating} ⭐ ({ratingCount})</p>
      </div>
      <div className="flex items-center justify-center relative mt-4 md:mt-0 md:ml-4">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId || cloudinaryImageId}`}
          alt="dish-image"
          className="h-36 w-36 object-cover rounded"
        />
        <button 
          className="absolute bottom-2 right-2 bg-gray-700 text-white py-1 px-3 rounded-lg hover:bg-gray-800"
          onClick={handleAddItem}
        >
          Add+
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
