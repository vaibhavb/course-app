import React from 'react';
import './App.css';
import CourseComponent from './CourseComponent';
import CourseEditComponent from './CourseEditComponent';

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
      </div>
      </div>

      <footer className="footer">
        <p>© 2023 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;

