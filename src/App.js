import React from 'react';
import './index.css';
import frontpageImage from './images/frontpage1.jpg';
function App() {
  const handleResumeClick = () => {
    // Replace 'path/to/resume.pdf' with the actual path or URL of your resume PDF file
    window.location.href = 'path/to/resume.pdf';
  };

  return (
    <div className="banner">
      <div className="app-text">
        <h2>Hi, I am</h2>
        <h1>Mirav Parekh.</h1>
        <p1>Developer|Data Enthusiast</p1>
        <p>
          I'm a Data Analyst based in Boston, US specializing in end-to-end ML
          pipelines, applications, and everything in between.
        </p>
        <div className="btn-group">
          <div className="signup-btn" onClick={handleResumeClick}>
            Resume
          </div>
        </div>
      </div>
      <div className="app-picture">
        <img
          src={frontpageImage}
          alt="Mirav Parekh"
          style={{ width: '710px', height: '635px' }}
        />
      </div>
      <div className="social-icons">
        <ul>
          <li>
            <button onClick={() => window.open('https://github.com/yourprofile', '_blank')}>
              <i className="fa fa-github" aria-hidden="true"></i>
            </button>
          </li>
          <li>
            <button onClick={() => window.open('https://www.linkedin.com/in/yourprofile', '_blank')}>
              <i className="fa fa-linkedin"></i>
            </button>
          </li>
        </ul>
      </div>
      <div className="email-link">
        <li>
          <button onClick={() => window.location.href = 'mailto:miravparekhweb@gmail.com'}>
            miravparekhweb@gmail.com
          </button>
        </li>
      </div>
    </div>
  );
}

export default App;