import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext"
import { useContext } from "react"


export default function ToggleSwitch() {
  const tempContext = useContext(CurrentTempUnitContext)
  return (
    <div>
      <label>
        <input onClick={tempContext.handleToggleSwitchChange}type="checkbox" />
        F or C
      </label>
    </div>
  )
}