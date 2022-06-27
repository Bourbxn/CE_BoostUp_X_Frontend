import { Fragment } from "react";
import "../../css/starfall.css";
const Starfall = () => {
  const config = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="hidden md:flex">
      {config.map((list) => {
        return (
          <Fragment key={list}>
            <div className={`meteor-${list}`}></div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Starfall;
