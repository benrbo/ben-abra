import icon01 from "../assets/images/weather-icons/sunny.gif";
import icon02 from "../assets/images/weather-icons/m-cloudy.gif";
import icon05 from "../assets/images/weather-icons/hazy.gif";
import icon06 from "../assets/images/weather-icons/partly-cloudy.gif";
import icon07 from "../assets/images/weather-icons/cloudy.gif";
import icon08 from "../assets/images/weather-icons/smoke.gif";
import icon11 from "../assets/images/weather-icons/fog.gif";
import icon12 from "../assets/images/weather-icons/showers.gif";
import icon13 from "../assets/images/weather-icons/m-c-rain.gif";
import icon14 from "../assets/images/weather-icons/m-c-rain.gif";
import icon15 from "../assets/images/weather-icons/thunder-storm.gif";
import icon16 from "../assets/images/weather-icons/t-storm-rain.gif";
import icon17 from "../assets/images/weather-icons/p-c-rain.gif";
import icon18 from "../assets/images/weather-icons/rainy.gif";
import icon19 from "../assets/images/weather-icons/flurries.gif";
import icon20 from "../assets/images/weather-icons/m-cloudy.gif";
import icon21 from "../assets/images/weather-icons/m-cloudy.gif";
import icon22 from "../assets/images/weather-icons/snow.gif";
import icon23 from "../assets/images/weather-icons/m-c-snow.gif";
import icon24 from "../assets/images/weather-icons/freezing-rain.gif";
import icon25 from "../assets/images/weather-icons/25-s.png";
import icon26 from "../assets/images/weather-icons/freezing-rain.gif";
import icon29 from "../assets/images/weather-icons/rainy-snow.gif";
import icon30 from "../assets/images/weather-icons/30-s.png";
import icon31 from "../assets/images/weather-icons/31-s.png";
import icon32 from "../assets/images/weather-icons/32-s.png";
import icon33 from "../assets/images/weather-icons/33-s.png";
import icon34 from "../assets/images/weather-icons/34-s.png";
import icon35 from "../assets/images/weather-icons/35-s.png";
import icon36 from "../assets/images/weather-icons/36-s.png";
import icon37 from "../assets/images/weather-icons/37-s.png";
import icon38 from "../assets/images/weather-icons/38-s.png";
import icon39 from "../assets/images/weather-icons/39-s.png";
import icon40 from "../assets/images/weather-icons/40-s.png";
import icon41 from "../assets/images/weather-icons/41-s.png";
import icon42 from "../assets/images/weather-icons/42-s.png";
import icon43 from "../assets/images/weather-icons/43-s.png";
import icon44 from "../assets/images/weather-icons/44-s.png";

const iconImages = {
  1: icon01,
  2: icon02,
  3: icon02,
  4: icon02,
  5: icon05,
  6: icon06,
  7: icon07,
  8: icon08,
  11: icon11,
  12: icon12,
  13: icon13,
  14: icon14,
  15: icon15,
  16: icon16,
  17: icon17,
  18: icon18,
  19: icon19,
  20: icon20,
  21: icon21,
  22: icon22,
  23: icon23,
  24: icon24,
  25: icon25,
  26: icon26,
  29: icon29,
  30: icon30,
  31: icon31,
  32: icon32,
  33: icon33,
  34: icon34,
  35: icon35,
  36: icon36,
  37: icon37,
  38: icon38,
  39: icon39,
  40: icon40,
  41: icon41,
  42: icon42,
  43: icon43,
  44: icon44,
};

export default function getIconImage(iconNumber) {
  return iconImages[iconNumber];
}