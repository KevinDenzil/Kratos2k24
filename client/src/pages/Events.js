import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../EventDetails';
import './Events.css';
import EventCard from '../components/EventCard';

const Events = () => {
  const { category: rawCategory } = useParams();
  const category = decodeURIComponent(rawCategory);
  const events = eventData[category];

  const [registrationData, setRegistrationData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegistrationData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://prad18.pythonanywhere.com/event-registrations/');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setRegistrationData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrationData();
  }, []);

  if (!events) {
    return <div className="events-page"><h1>Category not found!</h1></div>;
  }

  if (loading) {
    return <div className="events-page"><h1>Loading...</h1></div>;
  }

  if (error) {
    console.error('Error fetching registration data:', error);
    return <div className="events-page"><h1>Error: {error}</h1></div>;
  }

  const isDeadlinePassed = (deadline) => {
    if (!deadline) return false;
    const now = new Date();
    const deadlineDate = new Date(deadline);
    return now > deadlineDate;
  };

  const isClosingSoon = (deadline) => {
    if (!deadline) return false;
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const oneDayInMs = 24 * 60 * 60 * 1000;
    return deadlineDate - now <= oneDayInMs && deadlineDate > now;
  };

  return (
    <div className="events-page">
      <h1>{category}</h1>
      <div className="events-container">
        {Object.entries(events).map(([eventName, eventDetails]) => {
          const registrationCount = registrationData[eventName] || 0;
          const deadlinePassed = isDeadlinePassed(eventDetails.deadline);
          const closingSoon = isClosingSoon(eventDetails.deadline);
          let status = null;
          
          if (deadlinePassed) {
            status = "Registrations Closed";
          } else if (eventDetails.max_reg - registrationCount <= 0) {
            status = "Registrations Closed";
          } else if (closingSoon || eventDetails.max_reg - registrationCount < 5) {
            status = "Closing Soon!";
          }
          
          const isClickable = status !== "Registrations Closed";
          
          return (
            <EventCard
              key={eventName}
              eventName={eventName}
              icon={eventDetails.icon}
              teamSize={eventDetails.team_size}
              price={eventDetails.price}
              status={status}
              isClickable={isClickable}
              maxRegistrations={eventDetails.max_reg}
              currentRegistrations={registrationCount}
              deadline={eventDetails.deadline}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;