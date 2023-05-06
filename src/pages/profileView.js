import React, { useState, useEffect } from "react";
import './styles/viewProfile.css'

//This function returns a visual of a profile given its username
function ProfileView({username}) {
  const [profile, setProfile] = useState(null);

  //connects the username to a profile
  useEffect(() => {
    fetch(`http://localhost:8000/profiles?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setProfile(data[0]);
        }
      });
  }, [username]);

  //if username is empty
  if (!profile) {
    return <p>Loading...</p>;
  }

//returns the visual
  return (
    <div class="profileDiv">
      <h1 class="profiletitle">{profile.full_name}</h1>
      <img src="profilepicture.png" alt="Profile Picture" />
      <ul>
        <li>Username: {profile.username}</li>
        <li>Age: {profile.age}</li>
        <li>Role: {profile.mentor_or_mentee}</li>
        <li>Field of Mentorship: {profile.field_of_mentorship}</li>
        <li>Work Experiences:
          <ul>
            {profile.work_experiences.map((experience, index) => (
              <li key={index}>
                {experience.role} at {experience.company} ({experience.years} years)
              </li>
            ))}
          </ul>
        </li>
        <li>Requirement: {profile.requirement}</li>
        <li>Match: {profile.match}</li>
      </ul>
    </div>
  );
}

export default ProfileView;
