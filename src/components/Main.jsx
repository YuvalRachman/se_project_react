import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import { defaultClothingItems } from "../utils/constans.js";
function Main({ weatherData }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75&deg;</p>
        <ul className="cards__list">
          {defaultClothingItems
            // .filter((item) => {
            //   return item.weather === weatherData.type;
            // })
            .map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
