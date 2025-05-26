import SimpleAppointmentCard from "./SimpleAppointmentCard"
import { upcomingSchedule } from "../data/appointmentData"
import "./UpcomingSchedule.css"


export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      <div className="schedule-content">
        {upcomingSchedule.map((daySchedule, index) => (
          <div key={index} className="day-schedule">
            <h3 className="day-title">{daySchedule.day}</h3>
            <div className="appointments-grid">
              {daySchedule.appointments.map((appointment, idx) => (
                <SimpleAppointmentCard key={idx} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
