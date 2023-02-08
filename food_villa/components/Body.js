import { restrautList } from "./config";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <>
      <div className="search">
        <input type="text" className="search_text" placeholder="search" />
      </div>
      <div className="restaurant-list">
        {restrautList.map((restaurant) => {
          console.log(restaurant.data.name);
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
