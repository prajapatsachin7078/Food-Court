/* eslint-disable react/prop-types */
import CategoryItem from './FoodItem';

function Category(props) {
  const { title, itemCards } = props.item.card.card;
  const collapseId = title.replace(/[^a-zA-Z]/g, " ").split(" ")[0] + '1' + itemCards.length;

  return (
    <div className="border-b">
      <h2>
        <button 
          className="w-full text-left font-bold p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none" 
          type="button" 
          onClick={() => document.getElementById(collapseId).classList.toggle('hidden')}
        >
          {title} ({itemCards.length})
        </button>
      </h2>
      <div id={collapseId} className="hidden">
        <div className="p-4">
          {
            itemCards && itemCards.map((item, index) => (
              <CategoryItem key={index} info={item.card.info} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Category;
