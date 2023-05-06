import React from 'react';
import './styles/home_page.css';
import './styles/general.css';
import { Link } from 'react-router-dom';
import NavHeader from './navHeader';


const HomePage = () => {
  return (
    <div class="HomepageDiv">
        {console.log('homepage')}
        <NavHeader/>
        <h1 class="homepageTitle">Welcome to the app!</h1>
        <img class="homepageImage" src={"menT.png"} />
        <p class="homepageText">Please log in or register to continue.</p>
        <footer>
          Copyright © Group 30
          <br />
          Last Updated: April 2023
        </footer>
    </div>
  );
};

export default HomePage;

