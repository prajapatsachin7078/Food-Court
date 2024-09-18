/* eslint-disable react/display-name */// Import ItemCard

export const promotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <RestaurantCard {...props} />
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1 flex items-center z-10">
          <span className="mr-2">Open</span>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
    );
  };
};
