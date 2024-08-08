function ItemCard({ item }) {
  return (
    <div className="card__container">
      <h2 className="card__name">{item.name}</h2>
      <img className="card__img" src={item.link} alt={item.name} />
    </div>
  );
}
export default ItemCard;
