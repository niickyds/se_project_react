import "./ItemCard.css";

const ItemCard = ({ data, onSelectCard }) => {
  return (
    <div>
      <div>
        <img
          src={data.link}
          alt=""
          className="card_image"
          onClick={() => onSelectCard(data)}
        />
      </div>
      <div className="card_name">{data.name}</div>
    </div>
  );
};

export default ItemCard;
