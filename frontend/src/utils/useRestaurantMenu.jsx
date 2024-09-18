import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resMenuInfo, setResMenuInfo] = useState(null);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetchMenuData();
    }, [resId]);

    const fetchMenuData = async () => {
        try {
            const response = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${resId}`
            );
            const json = await response.json();
            const menuData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const catData = menuData.filter(cat => cat?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
            // console.log(catData)
            setCategories(catData);
            setResMenuInfo(json?.data?.cards[2]?.card?.card?.info);
        } catch (error) {
            console.log("Error in fetching menu data:", error);
        }
    };
    return [
        resMenuInfo,
        categories,
    ];
};

export default useRestaurantMenu;
