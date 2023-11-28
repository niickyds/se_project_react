import "./ItemCard.css";

const ItemCard = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.link} alt="" className="card_image" />
      </div>
      <div className="card_name">{data.name}</div>
    </div>
  );
};

export default ItemCard;
