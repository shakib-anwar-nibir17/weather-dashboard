import { useContext } from "react";
import PinImage from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src="./assets/cloud.svg" alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinImage} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
    </div>
  );
};

export default WeatherHeadline;
