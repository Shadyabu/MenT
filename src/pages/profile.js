import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavHeader from "./navHeader";
import './styles/createProfile.css';

function Profile() {
  const navigate = useNavigate();
  // State variables for user information
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [mentorOrMentee, setMentorOrMentee] = useState("");
  const [fieldOfMentorship, setFieldOfMentorship] = useState("");
  const [workExperiences, setWorkExperiences] = useState([{company: "", role: "", years: ""}]);
  const [requirement, setRequirement] = useState("");
  


  // Mentorship options offered by FDM
  const mentorshipOptions = [
    "",
    "Software Development",
    "Consulting",
    "Business Analysis",
    "Project Management",
    "Cyber Security",
    "Testing"
  ];

  const mentorMenteeOptions = [
    "",
    "Mentor",
    "Mentee"
  ];
  const requirementOptions = [
    "",
    "Careers guidance",
    "Industry expertise",
    "FDM-specific guidance",
    // Add any other options here
  ];
  

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Retrieve the username from local storage
    const username = localStorage.getItem("username");
  
    // Validate that the mentorOrMentee and fieldOfMentorship fields have been filled in
    if (mentorOrMentee === "" || fieldOfMentorship === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Create an object with the user information, including the username
    const profileData = {
      username: username,
      full_name: fullName,
      age: age,
      mentor_or_mentee: mentorOrMentee,
      field_of_mentorship: fieldOfMentorship,
      work_experiences: workExperiences,
      requirement: requirement,
      match: ""
    };
    
  
    // Make a POST request to the profile URL with the profile data using fetch
    fetch("http://localhost:8000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((response) => {
        console.log("Profile created successfully!");
        navigate("/homepage");
      })
      .catch((error) => {
        console.log("Error creating profile.");
      });
  };
  
  // Function to handle adding a new work experience
  const handleAddExperience = () => {
    setWorkExperiences([...workExperiences, {company: "", role: "", years: ""}]);
  };

  // Function to handle updating a work experience
  const handleUpdateExperience = (index, field, value) => {
    const experiences = [...workExperiences];
    experiences[index][field] = value;
    setWorkExperiences(experiences);
  };

  return (
      <div>
        <NavHeader/>
        <h1 class="createProfileHeader">Create Profile</h1>
        <form class="registerForm" onSubmit={handleSubmit}>
          <label>
            Full Name: <br/>
            <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
          </label>
          <br />
          <label>
            Age: <br/>
            <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
          </label>
          <br />
          <label>
            Mentor or Mentee: <br/>
            <select value={mentorOrMentee} onChange={(event) => setMentorOrMentee(event.target.value)}>
              {mentorMenteeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          {mentorOrMentee === "Mentor" && (
            <>
              <br />
              <label>
                What can you offer in a Mentorship: <br/>
                <select
                  value={requirement}
                  onChange={(event) => setRequirement(event.target.value)}
                >
                  {requirementOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <br />
            </>
          )}
          {mentorOrMentee === "Mentee" && (
            <>
              <br />
              <label>
                What are you looking for in a Mentorship: <br/>
                <select
                  value={requirement}
                  onChange={(event) => setRequirement(event.target.value)}
                >
                  {requirementOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <br />
            </>
          )}
          <br />
          <label>
            Field of Mentorship: <br/>
            <select value={fieldOfMentorship} onChange={(event) => setFieldOfMentorship(event.target.value)}>
              {mentorshipOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <br/>
          <br/>
          <br/>
          <label>
            Work Experience:
          </label>
          <br />
          {workExperiences.map((experience, index) => (
            <div key={index}>
              <br />
              <label>
                Company:  <br/>
                <input
                  type="text"
                  value={experience.company}
                  onChange={(event) => handleUpdateExperience(index, "company", event.target.value)}
                />
              </label>
              <br />
              <label>
                Role:  <br/>
                <input
                  type="text"
                  value={experience.role}
                  onChange={(event) => handleUpdateExperience(index, "role", event.target.value)}
                />
              </label>
              <br />
              <label>
                Years:  <br/>
                <input
                  type="number"
                  value={experience.years}
                  onChange={(event) => handleUpdateExperience(index, "years", event.target.value)}
                />
              </label>
              <div class="buttonAlign">
                <button onClick={handleAddExperience}>Add Experience</button>
              </div>
          <br />
        </div>
      ))}
      
      <br />
      <div class="buttonAlign">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>


  );
}

export default Profile;
