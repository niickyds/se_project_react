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
      <p className="card__name">{item.name}</p>
    </div>
  );
};

export default ItemCard;
