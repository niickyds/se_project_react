import SideBar from "./SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({ onCreate, clothingItems, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />
      <div className="profile__items-container">
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
        />
      </div>
    </div>
  );
};

export default Profile;
