import "./ItemCard.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const id = item._id;
  const isLoggedIn = React.useContext(CurrentUserContext);
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => {
    return id === currentUser._id;
  });
  const itemlikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button-active" : "card__like-button"
  }`;

  // const handleLike = () => {
  //   onCardLike(id, isLiked);
  // };

  // const onCardClick = () => {
  //   onSelectCard(item);
  // };

  return (
    <div key={item.id} className="card__holder">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <p className="card__name">
        {item.name}
        {isLoggedIn ? (
          <button
            className={itemlikeButtonClassName}
            type="button"
            onClick={() => onCardLike(id, isLiked)}
          ></button>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default ItemCard;
