import { healthData } from "../data/healthData"
import "./HealthStatusCards.css"


export default function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthData.map((item, index) => (
        <div key={index} className="health-card">
          <div className="card-header">
            <div className={`card-icon ${item.iconBg}`}>
              <span>{item.icon}</span>
            </div>
            <div className="card-info">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-date">Date: {item.date}</p>
            </div>
          </div>

          <div className="progress-bar">
            <div className={`progress-fill ${item.progressColor}`} style={{ width: `${item.progress}%` }}></div>
          </div>
        </div>
      ))}
    </div>
    
  )
}
