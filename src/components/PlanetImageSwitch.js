import Jupiter from "../pictures/planet/name/Jupiter.png";
import Mars from "../pictures/planet/name/Mars.png";
import Mercury from "../pictures/planet/name/Mercury.png";
import Naptune from "../pictures/planet/name/Naptune.png";
import Pluto from "../pictures/planet/name/Pluto.png";
import Saturn from "../pictures/planet/name/Saturn.png";
const PlanetImageSwitch = (num) => {
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

export default PlanetImageSwitch;
