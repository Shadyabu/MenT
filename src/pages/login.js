import React, { useState, useEffect } from 'react';
import User from '../Classes/User';
import NewHomePage from './userHomepage';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import NavHeader from './navHeader';
import './styles/login.css';



const LoginPage = ({ user, setUser}) => {
  const navigate = useNavigate();
  
  //---------------//

  const signOut = () => {
    signOut(auth)
}

  const auth = getAuth();

  // How to do this firebase shit 

  // const anonFunction = () => { // 1st this to make the anonymous account 
    signInAnonymously(auth)
    .then(() => {
      // Signed in..
      // console.log(user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  // }

  useEffect(()=>{ // 2nd, this to get the data and check some shit for change or whatever
    onAuthStateChanged(auth, (dataF)=>{
      console.log(dataF);
      setMsgID(dataF.uid);
      setTempo(dataF);
    })
  },[])

  //--------------//

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msgid, setMsgID] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const [tempo, setTempo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      handleRegistration();
    } else {
      handleLogin();
    }
  };

  const handleLogin = () => {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(data => {
        const theUser = data.find(u => u.username === username && u.password === password);
        if (theUser) {
          // console.log("MSGID:", theUser.msgid);
          // data.
          localStorage.setItem('username', theUser.username);
          localStorage.setItem('password', theUser.password);
          localStorage.setItem('msgid', theUser.msgid);
         
          //const updatedUser = { ...thisUser, username: user.username, password: user.password };
          const updatedUser = new User(theUser.username,theUser.password,theUser.msgid)
          setUser(updatedUser);
          //setUser({ username: updatedUser.username, password: updatedUser.password })

          console.log(updatedUser);
          navigate('/homepage');
          // console.log("MSGID:", theUser.msgid);
         
        } else {
          setError('Invalid username or password');
        }
      });
  };

  const handleRegistration = () => {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(data => {
        const existingUser = data.find(u => u.username === username);
        if (existingUser) {
          setError('Username already taken');
        } else {
          const newUser = { username, password, msgid };
          console.log(newUser)
          fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
          
          })
            .then(() => {
              // anonFunction();
              signInAnonymously(auth)
              .then(() => {
                // Signed in..
                // console.log(user.uid);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
              });
              localStorage.setItem('username', username);
              localStorage.setItem('password', password);
              localStorage.setItem('msgid', msgid);
             
              //const updatedUser = { ...thisUser, username: user.username, password: user.password };
              const updatedUser = new User(username, password, msgid)
              setUser(updatedUser);
              auth.signOut();
              //setUser({ username: updatedUser.username, password: updatedUser.password })
              navigate('/profile');
            })
            .catch(() => setError('Failed to create user'));
        }
      });
  };

  console.log("TEMPO")
    console.log(tempo);
  

  return (
    <div>
      <NavHeader/>
      <h1 class="loginHeader">{isRegistering ? 'Register' : 'Log in'}</h1>
      <form class="loginForm" onSubmit={handleSubmit}>
        <label>
          Username: 
          <input class="inputBox" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input class="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isRegistering ? 'Register' : 'Log in'}</button>
        {error && <p>{error}</p>}
      </form>
      <div class="centerButton">
      <button class="switchLogReg" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Log in' : 'Need to register?'}
      </button>
      </div>
      <footer>
          Copyright © Group 30
          <br />
          Last Updated: April 2023
        </footer>
    </div>
  );
};

export default LoginPage;
