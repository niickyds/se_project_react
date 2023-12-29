import "./ItemCard.css";

const ItemCard = ({ data, onSelectCard }) => {
  console.log(data);
  return (
    <div>
      <img
        src={data.link}
        alt="clothing item"
        className="card__image"
        onClick={() => onSelectCard(data)}
      />
      <div className="card__name">{data.name}</div>
    </div>
  );
};

export default ItemCard;
