import React, { useState, useEffect } from 'react';
import './styles/general.css';
import ProfileViewRequest from './profileViewRequest';
import "./styles/viewProfile.css";
import "./styles/match.css";
import NavLog from './NavLog';

//returns a list of matches for potential mentors/mentees
function Match({user, setUser}) {
  const [profile, setProfile] = useState({});
  const [matches, setMatches] = useState([]);
  console.log(user.username)

  //gathers data from database and stores the current users profile
  useEffect(() => {
    fetch('http://localhost:8000/profiles')
      .then(response => response.json())
      .then(data => {
        const currentUser = data.find(profile => profile.username === user.username);
        setProfile(currentUser);
        console.log('Current User Profile:', currentUser);

        if (currentUser.match !== "") {
          setMatches([]);
          return "No matches found";
        }

        //finds matches for the profile
        const matchingProfiles = data.filter(profile => 
          profile.requirement === currentUser.requirement &&
          profile.field_of_mentorship === currentUser.field_of_mentorship &&
          profile.mentor_or_mentee !== currentUser.mentor_or_mentee &&
          profile.match === ""
        );
        console.log('Matching Profiles:', matchingProfiles);

        //finds the usernames of matching profiles and stores them in an array
        const usernames = matchingProfiles.map(profile => profile.username);
        console.log('Matching Usernames:', usernames);
        setMatches(usernames);
      });
  }, []);

  //returns the profiles in a list or returns no matches found.
  return (
    <div>
      <NavLog user={user} setUser={setUser}/>
      <h1 class="matchTitle">Matches:</h1>
      <div className="profile-list">
        {matches.length > 0 ? (
          matches.map(match => (
            <ProfileViewRequest key={match.id} username={match} />
          ))
        ) : (
          <p class="matchText">No matches found.</p>
        )}
      </div>
    </div>
  );
}

export default Match;
