import "./ItemCard.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, handleCardLike, id }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemlikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button-active" : "card__like-button"
  }`;
  return (
    <div>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <p className="card__name">{item.name}</p>
      <button
        className={itemlikeButtonClassName}
        type="button"
        onMouseDown={() => handleCardLike({ id, isLiked })}
      ></button>
    </div>
  );
};

export default ItemCard;
