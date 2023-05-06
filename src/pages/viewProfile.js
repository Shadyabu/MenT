import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/home_page.css';
import './styles/general.css';
import './styles/profile.css';
import NavLog from './NavLog';


const ViewProfile = ({user, setUser}) => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  console.log(user.username)

  useEffect(() => {
    fetch('http://localhost:8000/profiles')
      .then(response => response.json())
      .then(data => {
        const currentUser = data.find(profile => profile.username === user.username);
        setProfile(currentUser);
        console.log('Profile ',currentUser)
      });
  }, []);

  const handleEditProfile = () => {
    navigate('/edit');
  }

  return (
    <div>
      <NavLog user={user} setUser={setUser}/>
      <div class="profileDiv">
        <h1>{profile.full_name}'s Profile</h1>
        <img src="profilepicture.png" alt="Profile Picture" />
        <p>Username: {profile.username}</p>
        <p>Age: {profile.age}</p>
        <p>Mentor or Mentee: {profile.mentor_or_mentee}</p>
        <p>Field of Mentorship: {profile.field_of_mentorship}</p>
        <p>Work Experiences:</p>
        <ul>
          {profile.workExperiences &&
            profile.workExperiences.map((experience) => (
              <li key={experience.id}>
                <p>Company: {experience.company}</p>
                <p>Role: {experience.role}</p>
                <p>Years: {experience.years}</p>
              </li>
            ))}
        </ul>
        <p>Requirement: {profile.requirement}</p>
        <li>Match: {profile.match}</li>
        <button onClick={handleEditProfile}>Edit Profile</button>
      </div>
    </div>
  );
}

export default ViewProfile;
