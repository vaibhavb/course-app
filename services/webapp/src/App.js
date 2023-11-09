import React from 'react';
import './App.css';
import CourseComponent from './CourseComponent';
import CourseEditComponent from './CourseEditComponent';
import Timeline from './Timeline';
import TimelineCard from './TimelineCard';
import timeAgo from './timeAgo'; 


function App() {
  return (
    <div className="app">
      <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      </nav>

      <div className="app-container">
      <div className="left-column">
        <h2>Menu</h2>
        <p>This is the left column content.</p>
      </div>
      <div className="right-column">
        <h2>Course Management System</h2>
        <CourseComponent />
        <CourseEditComponent />
        <Timeline>
            <TimelineCard
              date="MAR 9 2023"
              title="Office Visit"ß
              description="Nicole Schroeder - UCSF Orthopaedic Institute Hand Upper Extremity"
              timeLabel={timeAgo("MAR 9 2023")}
            />
            <TimelineCard
              date="JUL 21 2023"
              title="Patient Message"
              description="Nicole Schroeder - UCSF Orthopaedic Institute Hand Upper Extremity"
              timeLabel={timeAgo("JUL 21 2023")}
            />
        </Timeline>
      </div>
      </div>

      <footer className="footer">
        <p>© 2023 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;

