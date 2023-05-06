import React from 'react';
import './styles/general.css';
import './styles/aboutus.css';
import NavLog from './NavLog';

function AboutUs({user, setUser}) {
  return (
    <div>
      <NavLog user={user} setUser={setUser}/>
      <p class="aboutUsText">MenT is the FDM Mentor Matching Application. Use this app to find a mentor or become a mentee for the numerous benefits 
        that being in a mentorship offers. 
        MenT's specialized matching algorithm allows you to find the perfect match for your needs. Additionally MenT is FDM Specific
        meaning that the Learning and Development team have access to the application and can help out with any of your needs. 
      </p>
      <img src={"ment.png"} class="aboutUsLogo"/>
      <p class="aboutUsText">We are a team of Unversity Students at Queen Mary University of London:</p>
      <br/>
      <ul class="aboutUsText">
        <li>Abdallah</li>
        <li>Ameera</li>
        <li>Fraaz</li>
        <li>Humayrah</li>
        <li>Omar</li>
        <li>Shady</li>
        <li>Shahzeb</li>
      </ul>
      <br/>
      <p class="aboutUsText">We created this application to help FDM employees find a Mentorship since Mentorships can be hard to find but have so many benefits.</p>
    </div>
  );
}

export default AboutUs;
