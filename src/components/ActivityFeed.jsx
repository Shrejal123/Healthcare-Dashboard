import "./ActivityFeed.css"

export default function ActivityFeed() {
  const activityData = [
    { day: "Mon", height: 20 },
    { day: "Tues", height: 60 },
    { day: "Wed", height: 40 },
    { day: "Thurs", height: 80 },
    { day: "Fri", height: 100 },
    { day: "Sat", height: 30 },
    { day: "Sun", height: 50 },
  ]

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p className="activity-subtitle">3 appointments on this week</p>
      </div>

      <div className="activity-chart">
        {activityData.map((item, index) => (
          <div key={index} className="chart-column">
            <div className="chart-bars">
              <div className="chart-bar chart-bar-primary" style={{ height: `${item.height}%` }}></div>
              <div
                className="chart-bar chart-bar-secondary"
                style={{ height: `${Math.max(20, 100 - item.height)}%` }}
              ></div>
            </div>
            <span className="chart-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
