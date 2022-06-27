import Mars from "../../pictures/homeImage/Mars.png";
import Pluto from "../../pictures/homeImage/Pluto.png";
import Jupiter from "../../pictures/homeImage/Jupiter_real.png";
import Neptune from "../../pictures/homeImage/Naptune.png";
import Saturn from "../../pictures/homeImage/Saturn.png";
import Mercury from "../../pictures/homeImage/Mercury.png";
import Rocket from "../../pictures/homeImage/cloundWithRocket.png";
import Star from "../../pictures/homeImage/star.png";

const Planet = () => {
  const image = [
    { key: 1, img: Mars, alt: "Mars", style: "mars" },
    { key: 2, img: Pluto, alt: "Pluto", style: "pluto" },
    { key: 3, img: Jupiter, alt: "Jupiter", style: "jupiter" },
    { key: 4, img: Neptune, alt: "Neptune", style: "neptune" },
    { key: 5, img: Saturn, alt: "Saturn", style: "saturn" },
    { key: 6, img: Mercury, alt: "Mercury", style: "mercury" },
    { key: 7, img: Rocket, alt: "Rocket", style: "clound" },
    { key: 8, img: Star, alt: "Star1", style: "star star01" },
    { key: 9, img: Star, alt: "Star2", style: "star star02" },
    { key: 10, img: Star, alt: "Star3", style: "star star03" },
    { key: 11, img: Star, alt: "Star4", style: "star star04" },
    { key: 12, img: Star, alt: "Star5", style: "star star05" },
    { key: 13, img: Star, alt: "Star6", style: "star star06" },
    { key: 14, img: Star, alt: "Star7", style: "star star07" },
    { key: 15, img: Star, alt: "Star8", style: "star star08" },
    { key: 16, img: Star, alt: "Star9", style: "star star09" },
    { key: 17, img: Star, alt: "Star10", style: "star star10" },
  ];

  return (
    <div>
      {image.map((components) => {
        return (
          <img
            key={components.key}
            src={components.img}
            alt={components.alt}
            className={components.style}
          />
        );
      })}
    </div>
  );
};

export default Planet;
