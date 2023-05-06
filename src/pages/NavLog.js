import React from "react";
import { Link } from "react-router-dom";
import "./styles/home_page.css";
import "./styles/navlog.css"


const NavLog = ({user, setUser}) => {
    const handleLogout = () => {
        console.log('logged out')
        // Clear the user state and redirect to the login page
        localStorage.removeItem('user')
        setUser(null)
        window.location.href = '/';
      };
    return(
        <nav>
            <ul>
                <li><div class="logo"><img src='ment.png'></img></div></li>
                <li><Link to ='/homepage'>Home</Link></li>
                <li><Link to ='/aboutus'>About Us</Link></li>
                <li><Link class = "navlink" to="/match">Match</Link></li>
                <li><Link class = "navlink" to="/tempChatPage">Messages</Link></li>
                <li><a target="_blank" href="https://www.fdmgroup.com">FDMGroup</a></li>
                <li><Link class = "navlink" to="/contactus">Contact Us</Link></li>
                <li><Link class = "navlink" to="/view">Profile</Link></li>
                <li><Link class = "navlink" to="/admin">Admin</Link></li>
                <li class = "navlink"><button onClick={handleLogout}>Log out</button></li>
            </ul>
        </nav>
    )

}

export default NavLog;