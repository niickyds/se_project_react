import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ handleCreateModal, clothingItems, onSelectCard }) => {
  return (
    <section className="clothes__section">
      <div className="clothes__section-bar">
        <p className="clothes__section-text">Your items</p>
        <button
          className="clothes__section-btn"
          type="button"
          onClick={handleCreateModal}
        >
          + Add New
        </button>
      </div>

      <div className="clothes__section-cards">
        {clothingItems.map((item) => {
          return (
            // <div className="clothes__section-card">
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
            // </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
