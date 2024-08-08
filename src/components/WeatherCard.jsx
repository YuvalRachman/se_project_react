import sunny from "../images/sunny.svg";
import "../blocks/WeatherCard.css";
function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card_temp">Today is 75&deg; </p>
      <img src={sunny} alt="sunny" className="weather-card_image" />
    </section>
  );
}
export default WeatherCard;
