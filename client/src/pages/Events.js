import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../EventDetails';
import './Events.css';
import EventCard from '../components/EventCard';

const Events = () => {
  const { category: rawCategory } = useParams();
  const category = decodeURIComponent(rawCategory);
  const events = eventData[category];

  console.log('Category:', category);
  console.log('Events:', events);

  const [registrationData, setRegistrationData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegistrationData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://prad18.pythonanywhere.com/event-registrations/');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setRegistrationData(result);
        console.log('Registration Data:', result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrationData();
  }, []);

  if (!events) {
    console.log('No events found for category:', category);
    return <div className="events-page"><h1>Category not found!</h1></div>;
  }

  if (loading) {
    return <div className="events-page"><h1>Loading...</h1></div>;
  }

  if (error) {
    console.error('Error fetching registration data:', error);
    return <div className="events-page"><h1>Error: {error}</h1></div>;
  }

  return (
    <div className="events-page">
      <h1>{category}</h1>
      <div className="events-container">
        {Object.entries(events).map(([eventName, eventDetails]) => {
          const registrationCount = registrationData[eventName] || 0;
          let status = null;
          if (eventDetails.max_reg - registrationCount <= 0) {
            status = "Registrations Closed";
          } else if (eventDetails.max_reg - registrationCount < 5) {
            status = "Closing Soon!";
          }
          
          console.log('Rendering event:', eventName, {
            ...eventDetails,
            status,
            isClickable: status !== "Registrations Closed"
          });
          
          return (
            <EventCard
              key={eventName}
              eventName={eventName}
              icon={eventDetails.icon}
              teamSize={eventDetails.team_size}
              price={eventDetails.price}
              status={status}
              isClickable={status !== "Registrations Closed"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;