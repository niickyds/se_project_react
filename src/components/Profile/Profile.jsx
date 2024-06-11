import SideBar from "./SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  onClick,
  clothingItems,
  onSelectCard,
  onCardLike,
  onEditModal,
  onLogOut,
}) => {
  return (
    <div className="profile">
      <SideBar onEditModal={onEditModal} onLogOut={onLogOut} />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onClick={onClick}
        onCardLike={onCardLike}
      />
    </div>
  );
};

export default Profile;
