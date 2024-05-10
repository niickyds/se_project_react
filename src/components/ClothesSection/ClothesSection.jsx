import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";

const ClothesSection = ({ onClick, clothingItems, onSelectCard }) => {
  return (
    <section className="clothes__section">
      <div className="clothes__section-bar">
        <p className="clothes__section-text">Your items</p>
        <button
          className="clothes__section-btn"
          type="button"
          onClick={onClick}
        >
          + Add New
        </button>
      </div>

      <div className="clothes__section-cards">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item._id}
              id={item._id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
