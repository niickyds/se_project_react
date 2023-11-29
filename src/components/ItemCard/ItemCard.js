import "./ItemCard.css";

const ItemCard = ({ data, onSelectCard }) => {
  return (
    <div>
      <div>
        <img
          src={data.link}
          alt=""
          className="card__image"
          onClick={() => onSelectCard(data)}
        />
      </div>
      <div className="card__name">{data.name}</div>
    </div>
  );
};

export default ItemCard;
