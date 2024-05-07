import SideBar from "./SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  onClick,
  clothingItems,
  onSelectCard,
  handleCardLike,
  handleEditModal,
  handleLogOut,
}) => {
  return (
    <div className="profile">
      <SideBar onEditModal={handleEditModal} handleLogOut={handleLogOut} />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onClick={onClick}
        handleCardLike={handleCardLike}
      />
    </div>
  );
};

export default Profile;
