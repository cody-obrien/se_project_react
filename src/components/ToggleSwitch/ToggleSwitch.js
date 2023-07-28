import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const tempContext = useContext(CurrentTemperatureUnitContext);
  const isFahrenheit = tempContext.currentTemperatureUnit === "F";

  return (
    <div>
      <label className="switch">
        <input
          className="switch__box"
          onChange={tempContext.handleToggleSwitchChange}
          type="checkbox"
        />
        <span
          className={
            isFahrenheit
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p className={`switch__temp-F ${isFahrenheit && "switch__active"}`}>
          F
        </p>
        <p className={`switch__temp-C ${!isFahrenheit && "switch__active"}`}>
          C
        </p>
      </label>
    </div>
  );
}
