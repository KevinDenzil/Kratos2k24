import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../EventDetails';
import './Events.css'; 
import EventCard from '../components/EventCard';
import { CartContext } from '../CartStatus'; 

const Events = () => {
  const { category: rawCategory } = useParams();
  const category = decodeURIComponent(rawCategory);
  const events = eventData[category];

  const { cart, addToCart } = useContext(CartContext); 

  if (!events) {
    return <div>Category not found!</div>;
  }

  return (
    <div>
      <h1>{category}</h1>
      <div className="container">
        {Object.keys(events).map((eventName) => (
          <EventCard
            key={eventName}
            eventName={eventName}
            description={events[eventName].desc}
            teamSize={events[eventName].team_size}
            price={events[eventName].price}
            onAddToCart={() => addToCart(eventName)} 
          />
        ))}
      </div>
      {/* <div className="cartSummary">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Events;
