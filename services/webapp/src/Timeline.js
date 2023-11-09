import React from 'react';
import './Timeline.css';

const Timeline = ({ children }) => {
  return (
    <div className="timeline-container">
      {/* Render children, which are the TimelineCard components */}
      {children}
    </div>
  );
};

export default Timeline;
