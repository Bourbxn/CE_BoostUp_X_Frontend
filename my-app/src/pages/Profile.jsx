import React from "react";
import "../css/profile.css";
import ProgressBar from "../components/Progress";
import Jupiter from "../pictures/Jupiter.png";
import Mars from "../pictures/Mars.png";
import Mercury from "../pictures/Mercury.png";
import Naptune from "../pictures/Naptune.png";
import Pluto from "../pictures/Pluto.png";
import Saturn from "../pictures/Group.png";

let house=3;
let img;

if(house===1){
  img = Jupiter;
}
else if(house===2){
  img = Mars;
}
else if(house===3){
  img = Mercury;
}
else if(house===4){
  img = Saturn;
}
else if(house===5){
  img = Naptune;
}
else if(house===6){
  img = Pluto;
}

const Profile = () => {
  return (
    <div className="app-body bg-[url('pictures/bg.png')]">
      <div className="wrapper ">
        <div className="your-profile">
          <div className="your-profile-header">Your Profile</div>
          <div className="your-profile-layout">
            <div className="flex justify-center">
                <img className="w-48 md:w-64" src={img} />
            </div>
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

            <div className="flex justify-center pt-6">
              <button className="your-profile-pass">
                Change Password
              </button>
            </div>
          </div>
        </div>

        <div className="your-stat">
          <div className="basis-1/2">
            <div className="your-stat-header">Your Score</div>
            <div className="your-stat-score">
            <div className="your-stat-text">
                <div className="flex flex-col justify-center text-white">
                  <div>Place</div>
                  <div className="text-center pt-2 text-2xl md:text-4xl">#0</div>
                </div>
              </div>

              <div className="your-stat-text">
                <div className="flex flex-col justify-center text-white">
                  <div>Score</div>
                  <div className="text-center pt-2 text-2xl md:text-4xl">0</div>
                  <div className="text-center pt-2">Point</div>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/2 flex flex-col ">
            <div className="your-stat-header">Your Progress</div>
            <div className="your-stat-layout">
              <div className="your-stat-text">
                <div className="flex flex-col justify-center text-white p-6">
                  <div className="text-center">Progress</div>
                  <div className="text-center pt-2">0.00%</div>
                  <div className="pt-6">
                    <ProgressBar value={25} max={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
