import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onEditModal, onLogOut }) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="profile__sidebar">
      <div className="profile__logo">
        <img
          className="profile__avatar-logo"
          src={currentUser.avatar}
          alt="Avatar"
        />
        <p className="profile__user-name">{currentUser.name}</p>
      </div>
      <div className="profile__buttons">
        <button type="button" className="profile__button" onClick={onEditModal}>
          Change profile data
        </button>
        <button type="button" className="profile__button" onClick={onLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
