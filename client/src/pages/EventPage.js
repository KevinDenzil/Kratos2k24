import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventData } from '../EventDetails';
import { CartContext } from '../context/CartStatus';
import { FaUser, FaUserFriends, FaUsers, FaTrophy, FaShoppingCart } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AiOutlineRollback } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";

import './EventPage.css';

const EventPage = () => {
  const navigate = useNavigate();
  const { eventName } = useParams();
  const decodedEventName = decodeURIComponent(eventName);
  const eventDetails = getEventData(decodedEventName);
  const { cart, addToCart } = useContext(CartContext);
  const [posterSrc, setPosterSrc] = useState(null);

  useEffect(() => {
    const loadPoster = () => {
      const imagePath = `${process.env.PUBLIC_URL}/posters/${decodedEventName}.jpg`;
      setPosterSrc(imagePath);
    };
  
    loadPoster();
  }, [decodedEventName]);

  const isInCart = cart.some(item => item.name === decodedEventName);
  const isPaperPresentation = decodedEventName === "Paper Presentation";

  const handleAddToCart = () => {
    if (!isInCart && !isPaperPresentation) {
      addToCart({
        name: decodedEventName,
        price: eventDetails.price,
        icon: eventDetails.icon,
        team_size: eventDetails.team_size
      });
    }
  };

  const handleRegister = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfs8gJJ6GZ-x57UzCjGADsiDysUbRWu49PAeRTDsXrEYJ3iEg/viewform?usp=sf_link', '_blank');
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
      
      <div className="event-poster-container">
        {posterSrc && <img src={posterSrc} alt={`${decodedEventName} poster`} className="event-poster" />}
      </div>
      <div className="event-content">
      <div className="title-container">
    <MdArrowBack 
      className="icon-back-button" 
      onClick={() => navigate(-1)} 
    />
    <h1 className="event-title">
      {eventDetails.icon && <span className="event-icon">{eventDetails.icon}</span>}
      {decodedEventName}
    </h1>
  </div>
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
                      {/* <span>{eventDetails.prizes[0]}</span> */}
                      <span>Cash Prize</span>
                    </div>
                  </div>
                )}
                {eventDetails.prizes[1] && (
                  <div className="prize-card runner-up">
                    <FaTrophy className="trophy-icon" />
                    <h4>Runner Up</h4>
                    <div className="prize-amount">
                      <FaIndianRupeeSign />
                      {/* <span>{eventDetails.prizes[1]}</span> */}
                      <span>Cash Prize</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {isPaperPresentation ? (
          <button 
            className="add-to-cart-btn"
            onClick={handleRegister}
          >
            Register
          </button>
        ) : (
          <button 
            className={`add-to-cart-btn ${isInCart ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            {isInCart ? (
              <>
                <FaShoppingCart /> In Cart
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default EventPage;