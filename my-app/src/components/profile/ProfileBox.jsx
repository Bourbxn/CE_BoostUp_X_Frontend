import React from "react";
import "../../css/profile.css";
import Jupiter from "../../pictures/profileImage/Jupiter.png";
import Mars from "../../pictures/profileImage/Mars.png";
import Mercury from "../../pictures/profileImage/Mercury.png";
import Naptune from "../../pictures/profileImage/Naptune.png";
import Pluto from "../../pictures/profileImage/Pluto.png";
import Saturn from "../../pictures/profileImage/Group.png";

const Profile = () => {
  let house = 3;
  let img;

  if (house === 1) {
    img = Jupiter;
  } else if (house === 2) {
    img = Mars;
  } else if (house === 3) {
    img = Mercury;
  } else if (house === 4) {
    img = Saturn;
  } else if (house === 5) {
    img = Naptune;
  } else if (house === 6) {
    img = Pluto;
  }

  const StarImage = () => {
    return (
      <div className="flex justify-center">
        <img className="w-48 md:w-64" src={img} />
      </div>
    );
  };

  const UserInfo = () => {
    return (
      <div className="your-profile-user">
        <div className="your-profile-text">
          <div className="flex flex-col justify-center text-white">
            <div>Username</div>
            <div className="text-center pt-2">Oot_sir</div>
          </div>
        </div>
        <div className="your-profile-text">
          <div className="flex flex-col justify-center text-white">
            <div>Nickname</div>
            <div className="text-center pt-2">Oot_sir</div>
          </div>
        </div>
      </div>
    );
  };

  const ChangePassword = () => {
    return (
      <div className="flex justify-center pt-6">
        <button className="your-profile-pass">Change Password</button>
      </div>
    );
  };

  return (
    <div className="your-profile">
      <div className="your-profile-header">Your Profile</div>
      <div className="your-profile-layout">
        <StarImage />
        <UserInfo />
        <ChangePassword />
      </div>
    </div>
  );
};

export default Profile;
