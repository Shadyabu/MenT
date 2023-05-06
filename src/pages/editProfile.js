import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function EditProfile() {
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
    };
    
  
    // Make a PUT request to the profile URL with the profile data using fetch
    fetch(`http://localhost:8000/profiles?username=${username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then(() => {
        console.log("Profile updated successfully!");
        navigate("/view");
      })
      .catch((error) => {
        console.log("Error updating profile.");
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
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
          </label>
          <br />
          <label>
            Age:
            <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
          </label>
          <br />
          <label>
            Mentor or Mentee:
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
                What can you offer in a Mentorship:
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
                What are you looking for in a Mentorship:
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
            Field of Mentorship:
            <select value={fieldOfMentorship} onChange={(event) => setFieldOfMentorship(event.target.value)}>
              {mentorshipOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          
          


          <br />
          <label>
            Work Experience:
          </label>
          <br />
          <button onClick={handleAddExperience}>Add Experience</button>
          <br />
          {workExperiences.map((experience, index) => (
            <div key={index}>
              <br />
              <label>
                Company:
                <input
                  type="text"
                  value={experience.company}
                  onChange={(event) => handleUpdateExperience(index, "company", event.target.value)}
                />
              </label>
              <br />
              <label>
                Role:
                <input
                  type="text"
                  value={experience.role}
                  onChange={(event) => handleUpdateExperience(index, "role", event.target.value)}
                />
              </label>
              <br />
              <label>
                Years:
                <input
                  type="number"
                  value={experience.years}
                  onChange={(event) => handleUpdateExperience(index, "years", event.target.value)}
                />
              </label>
          <br />
        </div>
      ))}
      
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>


  );
}

export default EditProfile;
