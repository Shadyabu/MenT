import React, { useState, useEffect } from "react";

//This function returns a visual of a profile and a "send match request" button given a username
function ProfileViewRequest({username}) {
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

  //is triggered when "send match request button is pressed"
  const handleMatchRequest = () => {
    alert('Match request sent!');
  }

  //if username is empty
  if (!profile) {
    return <p>Loading...</p>;
  }

  //returns the visual and button
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
        <li><button onClick={handleMatchRequest}>Send match request</button></li>
      </ul>
    </div>
  );
}

export default ProfileViewRequest;
