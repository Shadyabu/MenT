import React from "react"
import { Link } from "react-router-dom";
import "./styles/home_page.css"

const NavHeader = () => {
    return(
        <nav>
            <ul>
                <li><div class="logo"><img src='ment.png'></img></div></li>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/aboutusout'>About Us</Link></li>
                <li><a target="_blank" href="https://www.fdmgroup.com">FDM Group</a></li>
                <li><Link class = "navlink" to="/contactusout">Contact Us</Link></li>
                <li><Link to="/login">Log in</Link></li>
            </ul>
        </nav>
    )
}

export default NavHeader;