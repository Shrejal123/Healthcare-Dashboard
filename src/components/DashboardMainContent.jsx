import AnatomySection from "./AnatomySection"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"
import "./DashboardMainContent.css"

export default function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-left">
          <AnatomySection />
          <ActivityFeed />
        </div>

        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  )
}
