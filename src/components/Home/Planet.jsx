import Mars from "../../pictures/planet/raw/Mars.png";
import Pluto from "../../pictures/planet/raw/Pluto.png";
import Jupiter from "../../pictures/planet/raw/Jupiter.png";
import Neptune from "../../pictures/planet/raw/Naptune.png";
import Saturn from "../../pictures/planet/raw/Saturn.png";
import Mercury from "../../pictures/planet/raw/Mercury.png";
import Star from "../../pictures/Star.png";
import "../../css/home.css";
const Planet = () => {
  const stars = [
    { key: 1, alt: "Star1", className: "star01" },
    { key: 2, alt: "Star2", className: "star02" },
    { key: 3, alt: "Star3", className: "star03" },
    { key: 4, alt: "Star4", className: "star04" },
    { key: 5, alt: "Star5", className: "star05" },
    { key: 6, alt: "Star6", className: "star06" },
    { key: 7, alt: "Star7", className: "star07" },
    { key: 8, alt: "Star8", className: "star08" },
    { key: 9, alt: "Star9", className: "star09" },
    { key: 10, alt: "Star10", className: "star10" },
  ];
  return (
    <div className="relative">
      <div className="saturns">
        <img src={Saturn} />
      </div>
      <div className="mercury">
        <img src={Mercury} />
      </div>
      <div className="jupiter">
        <img src={Jupiter} />
      </div>
      <div className="mars">
        <img src={Mars} />
      </div>
      <div className="pluto">
        <img src={Pluto} />
      </div>
      <div className="neptune">
        <img src={Neptune} />
      </div>
      {stars.map((star) => {
        return (
          <div key={star.key}>
            <img
              src={Star}
              className={`star  ${star.className}`}
              alt={star.alt}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Planet;
