import React from 'react';
import './styles/general.css';
import NavLog from './NavLog';

function ContactUs({user,setUser}) {
  return (
    <div>
      <NavLog user={user} setUser={setUser}/>
      <p>Contact Us here: group30@qmul.ac.uk</p>
    </div>
  );
}

export default ContactUs;
