import React from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../EventDetails';
import './Events.css';
import EventCard from '../components/EventCard';

const Events = () => {
  const { category: rawCategory } = useParams();
  const category = decodeURIComponent(rawCategory);
  const events = eventData[category];

  if (!events) {
    return <div className="events-page"><h1>Category not found!</h1></div>;
  }

  return (
    <div className="events-page">
      <h1>{category}</h1>
      <div className="events-container">
        {Object.entries(events).map(([eventName, eventDetails]) => (
          <EventCard
            key={eventName}
            eventName={eventName}
            icon={eventDetails.icon}
            teamSize={eventDetails.team_size}
            price={eventDetails.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;