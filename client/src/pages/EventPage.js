import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventData } from '../EventDetails';
import { CartContext } from '../CartStatus'; // Adjust the import path as needed
import { FaUser, FaUserFriends, FaUsers, FaTrophy } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import './EventPage.css';

const EventPage = () => {
  const navigate = useNavigate();
  const { eventName } = useParams();
  const decodedEventName = decodeURIComponent(eventName);
  const eventDetails = getEventData(decodedEventName);
  const { cart, addToCart } = useContext(CartContext);

  const isInCart = cart.includes(decodedEventName);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(decodedEventName);
    }
  };

  const getTeamIcon = (size) => {
    if (size === 1) return <FaUser />;
    if (size === 2) return <FaUserFriends />;
    return <FaUsers />;
  };

  const renderRules = (rules) => {
    if (Array.isArray(rules)) {
      return (
        <ul className="rules-list">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      );
    } else {
      return Object.entries(rules).map(([round, roundRules]) => (
        <div key={round} className="round-rules">
          <h4>{round.charAt(0).toUpperCase() + round.slice(1)}</h4>
          <ul>
            {roundRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      ));
    }
  };

  if (!eventDetails) {
    return <div className="event-page"><h1>Event not found!</h1></div>;
  }

  return (
    <div className="event-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="event-header">
        <div className="event-icon">{eventDetails.icon}</div>
        <h1>{decodedEventName}</h1>
      </div>

      <div className="event-content">
        <div className="details-container">
          <div className="detail-row">
            <div className="detail-item">
              <h3>Team Size</h3>
              <div className="detail-value">
                {getTeamIcon(eventDetails.team_size)}
                <span>{eventDetails.team_size || 'TBA'} {eventDetails.team_size === 1 ? 'person' : 'people'}</span>
              </div>
            </div>
            <div className="detail-item">
              <h3>Entry Fee</h3>
              <div className="detail-value">
                <FaIndianRupeeSign />
                <span>{eventDetails.price || 'TBD'}</span>
              </div>
            </div>
          </div>

          {eventDetails.desc && (
            <div className="detail-section">
              <h3>Description</h3>
              <p>{eventDetails.desc}</p>
            </div>
          )}

          <div className="detail-section">
            <h3>Rules</h3>
            {renderRules(eventDetails.rules)}
          </div>

          {eventDetails.prizes && eventDetails.prizes.length > 0 && (
            <div className="prizes-section">
              <h3>Prizes</h3>
              <div className="prizes-container">
                {eventDetails.prizes[0] && (
                  <div className="prize-card winner">
                    <FaTrophy className="trophy-icon" />
                    <h4>Winner</h4>
                    <div className="prize-amount">
                      <FaIndianRupeeSign />
                      <span>{eventDetails.prizes[0]}</span>
                    </div>
                  </div>
                )}
                {eventDetails.prizes[1] && (
                  <div className="prize-card runner-up">
                    <FaTrophy className="trophy-icon" />
                    <h4>Runner Up</h4>
                    <div className="prize-amount">
                      <FaIndianRupeeSign />
                      <span>{eventDetails.prizes[1]}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <button 
          className="add-to-cart-btn" 
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default EventPage;