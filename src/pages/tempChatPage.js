import React, {useState, useEffect, useRef}from 'react';
import './styles/home_page.css';
import './styles/general.css';
import './styles/chat.css';
import { Link } from 'react-router-dom';
import { collection, Firestore, onSnapshot, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import { unmountComponentAtNode } from 'react-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from './firebase';
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import NavLog from './NavLog';


function TempChatPage({user, setUser}) {   

  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/profiles')
      .then(response => response.json())
      .then(data => {
        const currentUser = data.find(profile => profile.username === user.username);
        setProfile(currentUser);
        console.log('Current User Profile:', currentUser);   
      });
    }, []);

  console.log("----HERE----");
  console.log(user);
  console.log(user.username);
  console.log(user.password);
  console.log("BALLS:", profile.age);
  console.log("----HERE----");


    //------Message component thing------//

    const auth = getAuth();

    const endChatDiv = useRef();

    const tempUsername = user.username;
    const tempid = user.msgid;

    // const [user] = useAuthState(auth);
    // const [user] = useState()

    const sendMessageChat = async (event) =>{
      if(event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
      } else {
        console.log("balls");
      }
    }

    const sendMessageDate = async (event) =>{
      sendMessage();
    }

    const sendMessage = async (event) => {
        // if(event.key === 'Enter') {
        //   event.preventDefault();
            if(input === ''){
                console.log("pass")
            } else {
                // const {uid, displayName} = auth.currentUser
                // const {uid, displayName} = "BWgGKKymeHa0q65cOSohER9PL5O2";
                // const {uid, displayName} = auth.getUser('9gcQMdlmySYU0QkxuwTxZyANN6B2');
                await addDoc(collection(db, 'messages'), {
                    text: input,
                    name: "displayName",
                    uid: tempid, //<----------------
                    timestamp: serverTimestamp()
                })
                document.getElementById("chatBarText").value = "";
                // window.location.reload(false);
            }  

            endChatDiv.current?.scrollIntoView({behaviour: 'smooth'});
            // scrollToBottom();
        //} 
    }

    console.log(auth.currentUser);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let messages = [];
          querySnapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
          });
          setMessages(messages);
        });
        return () => unsubscribe();
      }, []);

      useEffect(()=>{
        endChatDiv.current.scrollIntoView({behaviour: 'smooth'});
      }, [messages]);

    //----------------------------------//

    //----------Att 2--------//

    const [input, setInput] = useState("");    

    const handleIconClick = (event) => { //Function handles clicks for icons (General for now)
        console.log("Icon Test")
    }
  

    function displayDateSelector() { //Displays date selector when clicked
        var dateVar = document.getElementById("dateDivBox");
        if (window.getComputedStyle(dateVar).display === "none") {
            dateVar.style.display = "flex";
        } else {
            dateVar.style.display = "none";
        }
      }

      const [date, setDate] = useState('');

      const dateTimeValue = (event) =>{ //Submits the date time value inputted 
        event.preventDefault();
        console.log("Date time enter");
        console.log(date);
        setInput(date);
        sendMessageDate();
        console.log("--------------BALLS-------------",input[0], input[1]);
        // const dateDisplay = document.createElement("p");
        // const dateDisplayText = document.createTextNode(date);
        // dateDisplay.appendChild(dateDisplayText);
        // document.getElementById("blankDiv1").appendChild(dateDisplay);
        // endChatDiv.current?.scrollIntoView({behaviour: 'smooth'});
      }

      console.log("USERNAME TEST --> ", user.username);
      const tempNull = "NULL Username";
  return (
    <div>
      <NavLog user={user} setUser={setUser}/>
      <div id="chatBody">{ profile.match === '' ? <p></p> :  
        <div id="chatProfileHeader">  
            <div id="profileHeaderDiv">
                {/* <button id="topBarItem" onClick={handleIconClick}>Arrow Left</button> */}
                <img  id="topItemImg" src='ment.png'></img>
                {/* <p id="topBarItem">Picture</p> */}
                <p id="topBarItem">{profile.match ? profile.match : tempNull}</p>
            </div>
            <button id="topBarItemAppointment" onClick={displayDateSelector}>Appointment(Style Individually)</button> 
            <div id="dateDivBox">
                <input type="datetime-local" id="dateSelector" name="dateTimeLocal" onChange={(event)=> {setInput(event.target.value)}}/>
                <input type="submit" id="dateSelectorSubmit" onClick={dateTimeValue}/>
            </div>
        </div> }
        { profile.match === '' ? <p ref={endChatDiv}></p> : <div id="chatBox">
        {messages ? messages.map((message)=>(
            <div key={message.id} id="recievedMessage">
            {message.uid ===  tempid && message && message.text[0] === '2' && message.text[1] === '0' ? 
                <p id="appointmentChatItem">-- An appointment has been made for "{message.text.slice(0,10)} {message.text.slice(11,30)}" --</p> : 
                message.uid ===  tempid && message ? 
                <p id="chatItem">{message.text}</p> 
                : //{message.timestamp.seconds ? new Date(message.timestamp.seconds*1000).toLocaleString() : message.text}
                <p id="chatItem2Temp">{message.text}</p>
            }
            </div>
        )) : false}
            <div ref={endChatDiv}></div>
        </div>}
        {profile.match === '' ? <div id="unmatchedPrompt">You are currently not matched with anyone so do not have access to the message feature</div> : <div id="chatBar">
            <textarea id="chatBarText" placeholder="Write message" cols="5" rows="1" onChange={(event)=> {setInput(event.target.value)}} onKeyDown={sendMessageChat} ></textarea>
            <div id="barIconDiv">
                <button id="barIcon" onClick={handleIconClick}>Send</button>
            </div>
        </div>}
      </div>
    </div>
  );
}


export default TempChatPage;


