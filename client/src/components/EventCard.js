import React from 'react';
import './EventCard.css'; 

const EventCard = ({ eventName, description, teamSize, price, onAddToCart }) => {
  return (
    <div className="event-card">
      <h3>{eventName}</h3>
      <p>{description}</p>
      <p>Team Size: {teamSize}</p>
      <p>Price: {price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default EventCard;
