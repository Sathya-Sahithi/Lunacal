import React, { useState } from 'react';
import './ProfileTabs.css';

import "bootstrap-icons/font/bootstrap-icons.css";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    
    <div className="profile-tabs">

      <div className="circle">
        <i className="bi bi-question-circle"></i>
      </div>
      <div className="grid">
        <i className="bi bi-grid-3x2-gap-fill"></i>
      </div>

      <div className="tabs">
        <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About Me</button>
        <button className={activeTab === 'experiences' ? 'active' : ''} onClick={() => setActiveTab('experiences')}>Experiences</button>
        <button className={activeTab === 'recommended' ? 'active' : ''} onClick={() => setActiveTab('recommended')}>Recommended</button>
      </div>

      <div className="tab-content">
        {activeTab === 'about' && (
          <div>
            <p>I am a dedicated Front-end developer focused on creating attractive and user-friendly websites. 
                I am passionate about translating design concepts into interactive digital experiences and 
                continuously improving my skill set to stay updated with the latest industry trends. 
                My portfolio showcases a variety of projects that demonstrate my ability to deliver responsive
                and dynamic web applications.</p>
            <p>I am a Frontend Developer with a passion for learning and can work with estimation of future tasks and client feedback. 
                I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve
                my skills and am fully aware of the latest Front-end Development Tools. I have a firm knowledge of JavaScript, React.js, Bootstrap 
                and possess a good knowledge of computer software packages (frameworks
                and tools) that are used in today’s technology.</p>
          </div>
        )}
        {activeTab === 'experiences' && <p>Experience </p>}
        {activeTab === 'recommended' && <p>Recommendations </p>}
      </div>

    </div>
  );
};

export default ProfileTabs;
