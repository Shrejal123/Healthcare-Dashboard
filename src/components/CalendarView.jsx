import { ChevronLeft, ChevronRight } from "lucide-react"
import { calendarData } from "../data/calendarData"
import "./CalendarView.css"

// export default function CalendarView() {
//   const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

//   return (
//     <div className="calendar-view">
//       <div className="calendar-header">
//         <div className="calendar-info">
//           <p className="calendar-subtitle">This Week</p>
//           <h2 className="calendar-title">October 2021</h2>
//         </div>
//         <div className="calendar-nav">
//           <button className="nav-btn">
//             <ChevronLeft className="nav-icon" />
//           </button>
//           <button className="nav-btn">
//             <ChevronRight className="nav-icon" />
//           </button>
//         </div>
//       </div>

//       <div className="calendar-days-header">
//         {daysOfWeek.map((day) => (
//           <div key={day} className="day-header">
//             {day}
//           </div>
//         ))}
//       </div>
     

//       <div className="calendar-grid">
//         {calendarData.days.map((day, index) => (
//           <div key={index} className="calendar-day">
//             <div className="day-number">{day.date}</div>
//             <div className="day-appointments">
//               {day.appointments.map((appointment, idx) => (
//                 <div key={idx} className={`appointment-time ${appointment.color}`}>
//                   {appointment.time}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="appointment-cards">
//         <div className="appointment-card dentist-card">
//           <div className="card-content">
//             <div className="card-text">
//               <h3 className="card-title">Dentist</h3>
//               <p className="card-time">09:00-11:00</p>
//               <p className="card-doctor">Dr. Cameron Williamson</p>
//             </div>
//             <span className="card-emoji">🦷</span>
//           </div>
//         </div>

//         <div className="appointment-card physio-card">
//           <div className="card-content">
//             <div className="card-text">
//               <h3 className="card-title">Physiotherapy Appointment</h3>
//               <p className="card-time">11:00-12:00</p>
//               <p className="card-doctor">Dr. Kevin Djones</p>
//             </div>
//             <span className="card-emoji">🏃</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
export default function CalendarView() {
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="calendar-info">
          <p className="calendar-subtitle">This Week</p>
          <h2 className="calendar-title">October 2021</h2>
        </div>
        <div className="calendar-nav">
          <button className="nav-btn">
            <ChevronLeft className="nav-icon" />
          </button>
          <button className="nav-btn">
            <ChevronRight className="nav-icon" />
          </button>
        </div>
      </div>

      <div className="calendar-days-header">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {calendarData.days.map((day, index) => (
          <div key={index} className="calendar-day">
            <div className="day-number">{day.date}</div>
            <div className="day-appointments">
              {day.appointments.map((appointment, idx) => (
                <div key={idx} className={`appointment-time ${appointment.color}`}>
                  {appointment.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-cards">
        <div className="appointment-card dentist-card">
          <div className="card-content">
            <div className="card-text">
              <h3 className="card-title">Dentist</h3>
              <p className="card-time">09:00-11:00</p>
              <p className="card-doctor">Dr. Cameron Williamson</p>
            </div>
            <span className="card-emoji">🦷</span>
          </div>
        </div>

        <div className="appointment-card physio-card">
          <div className="card-content">
            <div className="card-text">
              <h3 className="card-title">Physiotherapy Appointment</h3>
              <p className="card-time">11:00-12:00</p>
              <p className="card-doctor">Dr. Kevin Djones</p>
            </div>
            <span className="card-emoji">🏃</span>
          </div>
        </div>
      </div>
    </div>
  )
}
