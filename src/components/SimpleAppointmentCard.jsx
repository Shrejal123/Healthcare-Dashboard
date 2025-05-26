import PropTypes from "prop-types";
import "./SimpleAppointmentCard.css";

export default function SimpleAppointmentCard({ appointment }) {
  return (
    <div className={`simple-card ${appointment.bgColor} ${appointment.textColor}`}>
      <div className="simple-card-content">
        <div className="simple-card-text">
          <h4 className="simple-card-title">{appointment.title}</h4>
          <p className="simple-card-time">{appointment.time}</p>
        </div>
        <span className="simple-card-icon">{appointment.icon}</span>
      </div>
    </div>
  );
}

// PropTypes for runtime type checking
SimpleAppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }).isRequired,
};
