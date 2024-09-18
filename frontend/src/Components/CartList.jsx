import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../utils/redux/cartSlice';

function CartList() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const price = cartItems.reduce((sum, item) => {
      return sum + (item.defaultPrice || item.price);
    }, 0);
    
    const priceInRupees = price / 100; // Assuming price is in cents/paise
    setTotalPrice(priceInRupees);
    
    // Applying 10% discount
    const discount = 0.10 * priceInRupees;
    setDiscountedPrice(priceInRupees - discount);
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCompleteOrder = () => {
    // Logic for order completion
    alert("Order completed!");
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto mt-10">
      {/* Cart Header */}
      <div className="border rounded-lg p-4 mb-6 flex justify-between items-center">
        <h5 className="text-xl font-semibold">Cart ({cartItems.length})</h5>
        <button className="btn bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div className="border rounded-lg shadow mb-6" key={item.id}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Item Info */}
            <div className="p-4">
              <h5 className="text-lg font-bold">{item.name}</h5>
              <p className="text-gray-700 text-sm">{item.description}</p>
              <p className="text-gray-600 text-sm mt-2">
                Price: <span className="font-semibold">{((item.defaultPrice || item.price) / 100).toFixed(2)} INR</span>
              </p>
              <p className="text-gray-600 text-sm">
                Ratings: <span className="font-semibold">{item.ratings.aggregatedRating.rating} ⭐</span> ({item.ratings.aggregatedRating.ratingCount})
              </p>
            </div>

            {/* Item Image */}
            <div className="flex justify-center items-center relative p-4">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId || item.cloudinaryImageId}`}
                alt="dish"
                className="h-40 w-40 object-cover rounded-lg"
              />
              <button
                className="absolute bottom-4 right-4 bg-gray-600 text-white px-3 py-1 rounded"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove-
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Total and Discounted Price Section */}
      <div className="border rounded-lg p-4 flex flex-col items-end">
        <div className="mb-2">
          <h5 className="text-lg font-semibold">
            Total Price: <span className="font-bold">💰{totalPrice.toFixed(2)}</span>
          </h5>
        </div>
        <div className="mb-2">
          <h6 className="text-md text-green-600">
            10% Discount Applied: <span className="font-semibold">💰{(totalPrice * 0.10).toFixed(2)}</span>
          </h6>
        </div>
        <div>
          <h4 className="text-xl text-blue-600">
            Final Price: <span className="font-bold">💰{discountedPrice.toFixed(2)}</span>
          </h4>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg" onClick={handleCompleteOrder}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartList;
