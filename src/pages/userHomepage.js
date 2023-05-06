import React from 'react';
import './styles/general.css';
import './styles/userHomepage.css';
import './styles/home_page.css';
import { Link } from 'react-router-dom';
import User from '../Classes/User';
import Match from './match';
import NavLog from './NavLog';

const NewHomePage = ({ user, setUser, profile}) => {
  
  const handleLogout = () => {
    console.log('logged out')
    // Clear the user state and redirect to the login page
    localStorage.removeItem('user')
    setUser(null)
    window.location.href = '/';
  };
  
  console.log("----HERE----");
  console.log(user);
  console.log(user.username);
  console.log(user.password);
  console.log("MSG:",user.msgid);
  console.log("----HERE----");
  
  return (
    <div className="homepage-container">
       <div className="homepage-container">
          {console.log('logged in homepage ' ,user)}
          {console.log('logged in homepage ' ,user.msgid)}
          {console.log('homepage')}
          {console.log('username is ',user.username)}
          <div>
            <NavLog user={user} setUser={setUser}/>
          </div>
          <div class="hero">
            <h1 className="welcome">Welcome, {user.username}!</h1>
            <p class="homePara">This is your MenT home page where you can find your perfectly matched Mentorship to boost your career.</p>
          </div>
      </div>
    </div>
  );
};

export default NewHomePage;
