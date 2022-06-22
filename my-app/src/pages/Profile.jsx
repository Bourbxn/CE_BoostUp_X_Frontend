import React from "react";
import "../css/profile.css";
import ProfileBox from "../components/profile/ProfileBox";
import ScoreBox from "../components/profile/ScoreBox";
import ProgressBox from "../components/profile/ProgressBox";

const Profile = () => {
  return (
    <div className="profile-layout">
      <div className="wrapper">
        <ProfileBox />
        <div className="your-stat">
          <ScoreBox />
          <ProgressBox />
        </div>
      </div>
    </div>
  );
};

export default Profile;
