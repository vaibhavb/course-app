import React from 'react';
import './TimelineCard.css';

const TimelineCard = ({ date, title, description, timeLabel }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        {timeLabel && <div className="time-label">{timeLabel}</div>}
      </div>
    </div>
  );
};

export default TimelineCard;
