import logo from './menT.png';
import './App.css';
import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/homepage';
import NewHomePage from './pages/userHomepage';
import Profile from './pages/profile';
import User from './Classes/User'
import ViewProfile from './pages/viewProfile';
import EditProfile from './pages/editProfile';
import Match from './pages/match';
import TempChatPage from './pages/tempChatPage';
import Admin from './pages/admin';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contact';
import AboutUsOut from './pages/aboutUsOut';
import ContactUsOut from './pages/contactUsOut';

const App = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    msgid: "" //<-------> 1.
  });
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    msgid: "" 
  });
  //console.log(user.getPassword())
  console.log('user in App:', user);


  useEffect(() => {
    // Set the user object to local storage on state update
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  //---TEMP---//


  //---TEMP---//

  return (
       <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/aboutus" element={<AboutUs setUser={setUser}/>} />
        <Route exact path="/aboutusout" element={<AboutUsOut/>} />
        <Route exact path="/contactus" element={<ContactUs setUser={setUser}/>} />
        <Route exact path="/contactusout" element={<ContactUsOut/>} />
        <Route exact path="/login" element={<LoginPage setUser={setUser} />} />
        <Route exact path="/homepage" element={<NewHomePage user={user} setUser={setUser} profile={profile}/>} />
        <Route exact path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route exact path="/view" element={<ViewProfile user={user} setUser={setUser} />} />
        <Route exact path="/edit" element={<EditProfile user={user} setUser={setUser} />} />
        <Route exact path="/match" element={<Match user={user} setUser={setUser}/>} />
        <Route exact path="/admin" element={<Admin user={user} setUser={setUser}/>} />
        <Route exact path="/tempChatPage" element={<TempChatPage user={user} setUser={setUser}/>} />
        <Route path='/fdm' component={() => {window.location.href = 'https://www.fdmgroup.com';return null;}}/>
      </Routes>
    </Router>
  );
};

export default App;
