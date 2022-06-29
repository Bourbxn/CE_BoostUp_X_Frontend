import React, { useEffect, useState } from "react";
import axios from "axios";
import getCookie from "../../hook/getCookie";
import PlanetImageSwitch from "../PlanetImageSwitch";

const Top3Card = () => {
  const [rank, setRanking] = useState([]);
  useEffect(() => {
    const fetchRanking = async () => {
      const token = `Bearer ` + getCookie("token");
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
  return (
    <>
      {rank.length === 0 ? (
        <div className="card md:w-96 lg:-my-16 mt-10 bg-base-100 shadow-xl mx-auto">
          <div className="card-body ">
            <h2 className="card-title text-2xl text-white justify-center">
              No Data Contents
            </h2>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 justify-items-center  text-center">
          {rank.map((user, key) => {
            return (
              <div
                key={key}
                className="card md:w-96 lg:-my-40 my-5 bg-base-100 shadow-xl"
              >
                <figure className="pt-10">
                  <img src={PlanetImageSwitch(user.group)} alt="Shoes" />
                </figure>
                <div className="card-body text-center items-center">
                  <h2 className="card-title text-2xl text-success">
                    {user.name}
                  </h2>
                  <div className="flex space-x-5">
                    <h2 className="md:text-2xl text-lg text-warning font-semibold">
                      Score : {user.score}
                    </h2>
                    <h2 className="md:text-2xl text-lg text-error font-semibold">
                      Finished : {user.finished}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Top3Card;
