import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  // console.log(item);
  return (
    <div>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
