import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUserFriends, FaUsers } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import './EventCard.css';

const EventCard = ({ eventName, icon, teamSize, price, status, isClickable }) => {
  const navigate = useNavigate();

  const getTeamIcon = (size) => {
    if (size === 1) return <FaUser />;
    if (size === 2) return <FaUserFriends />;
    return <FaUsers />;
  };

  const handleClick = () => {
    if (isClickable) {
      const encodedEventName = encodeURIComponent(eventName);
      navigate(`/event/${encodedEventName}`);
    }
  };

  return (
    <div 
      className={`event-card ${!isClickable ? 'disabled' : ''}`} 
      onClick={handleClick} 
      onTouchStart={() => {}}
    >
      <div className="icon-container">
        {icon}
      </div>
      <div className="event-info">
        <h3>{eventName}</h3>
        <div className="event-details">
          <div className="team-size">
            {getTeamIcon(teamSize)}
            <span>{teamSize} {teamSize === 1 ? 'person' : 'people'}</span>
          </div>
          <div className="price">
            <FaIndianRupeeSign />
            <span>{price || 'TBD'}</span>
          </div>
        </div>
        {status && (
          <div className={`status ${status === "Registrations Closed" ? 'closed' : 'closing'}`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;