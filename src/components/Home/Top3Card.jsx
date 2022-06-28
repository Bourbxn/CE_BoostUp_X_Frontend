import React, { useEffect, useState } from "react";
import Jupiter from "../../pictures/profileImage/Jupiter.png";
import Mars from "../../pictures/profileImage/Mars.png";
import Mercury from "../../pictures/profileImage/Mercury.png";
import Naptune from "../../pictures/profileImage/Naptune.png";
import Pluto from "../../pictures/profileImage/Pluto.png";
import Saturn from "../../pictures/profileImage/Saturn.png";
import axios from "axios";

const Top3Card = () => {
  const [rank, setRanking] = useState([]);
  useEffect(() => {
    const fetchRanking = async () => {
      const token = `Bearer ` + window.localStorage.getItem("token");
      if (token) {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND}/users/score/ranking`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (res.status === 200) setRanking(res.data);
        else if (res.status === 401) window.localStorage.clear();
      }
    };
    fetchRanking();
  }, []);
  const planetImage = (num) => {
    if (num == 0) {
      return Mercury;
    } else if (num == 1) {
      return Jupiter;
    } else if (num == 2) {
      return Mars;
    } else if (num == 3) {
      return Naptune;
    } else if (num == 4) {
      return Pluto;
    } else if (num == 5) {
      return Saturn;
    }
  };
  return (
    <div className="grid lg:grid-cols-3 justify-items-center">
      {rank.map((user, key) => {
        return (
          <div key={key} className="card md:w-96 lg:-my-40 my-5 bg-base-100 shadow-xl">
            <figure>
              <img src={planetImage(user.group)} alt="Shoes" />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="card-title text-2xl">{user.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Top3Card;
