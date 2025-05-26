import { Search } from "lucide-react"
import HealthStatusCards from "./HealthStatusCards"
import "./AnatomySection.css"
import human from "../../public/images/human.jpg"


export default function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-header">
        <h2 className="anatomy-title">Health Overview</h2>
        <button className="search-btn">
          <Search className="search-icon" />
        </button>
      </div>

      <div className="anatomy-content">
        <div className="anatomy-visual">
          <div className="body-container">
            <img src={human} alt="human"/>

            <div className="health-indicator heart-indicator">
              <span className="indicator-dot heart-dot"></span>
              <span>Healthy Heart</span>
            </div>

            <div className="health-indicator leg-indicator">
              <span className="indicator-dot leg-dot"></span>
              <span>Healthy Leg</span>
            </div>
          </div>
        </div>

        <HealthStatusCards />
      </div>
    </div>
  )
}
