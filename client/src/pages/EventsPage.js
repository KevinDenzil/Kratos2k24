import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';

const EventsPage = () => {
  const categories = [
    { name: 'Pre-Events', path: 'Pre Events' },
    { name: 'Technical Events', path: 'Technical Events' },
    { name: 'Non-Technical Events', path: 'Non-Technical Events' },
    { name: 'Playground Events', path: 'Playground Events' }
  ];

  return (
    <div className="events-page">
      <h1>Event Categories</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <Link 
            key={category.path}
            to={`/events/${category.path}`}
            className="category-button"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;