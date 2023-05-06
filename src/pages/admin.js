import React, { useState, useEffect } from "react";
import ProfileView from "./profileView";
import './styles/viewProfile.css';
import './styles/general.css';
import './styles/admin.css'
import NavLog from "./NavLog";

function Admin({user,setUser}) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/profiles")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
      });
  }, []);

  const handleProfileSelect = (profile) => {
    console.log(profile.match);
  };

  const handleCreateMentorship = (profile) => {
    const updatedProfiles = profiles.map((p) =>
      p.username === profile.username ? { ...p, match: "matching in progress" } : p
    );
    setProfiles(updatedProfiles);
    alert("Creating Mentorship in progress ");
  };

  const handleDeleteMentorship = (profile) => {
    const updatedProfiles = profiles.map((p) =>
      p.username === profile.username ? { ...p, match: "" } : p
    );
    setProfiles(updatedProfiles);
    alert("Mentorship deleted");
  };

  return (
    <div>
      <NavLog user={user} setUser={setUser}/>
      <h1 class="pagetitle">All users:</h1>
      <div className="profile-list">
        {profiles.map((profile) => (
          <li><div key={profile.username}>
            <li><button onClick={() => handleProfileSelect(profile)}>
              <ProfileView username={profile.username} />
            </button></li>
            {profile.match ? (
              <li><button class="adminButton" onClick={() => handleDeleteMentorship(profile)}>
                Delete mentorship
              </button></li>
            ) : (
              <li><button class="adminButton" onClick={() => handleCreateMentorship(profile)}>
                Create mentorship
              </button></li>
            )}
          </div></li>
        ))}
      </div>
    </div>
  );
}

export default Admin;
