import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = () => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="profile__logo">
      <img
        className="profile__avatar-logo"
        src={currentUser.avatar}
        alt="Avatar"
      />
      <p className="profile__user-name">{currentUser.name}</p>
    </div>
  );
};

export default SideBar;
