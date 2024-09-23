/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */// Import ItemCard

export const promotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    const {item} = props;
    return (
      <div className="relative">
        <RestaurantCard {...props} />
        <div className="absolute top-0 left-0 -translate-x-1 bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1 flex items-center z-10">
        {item.isOpen && <span className="px-2">Open</span>}
        </div>
      </div>
    );
  };
};
