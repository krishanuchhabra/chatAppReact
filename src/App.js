import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React,{useState, useEffect} from 'react'
import './App.css';
import db from './firebase';
import Message from "./Message.js";
import firebase from "firebase"
import FlipMove from 'react-flip-move'
import {IoSend} from 'react-icons/io5'

function App() {


  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection("messages")
    .orderBy("timestamp", "desc")
    .onSnapshot( snapshot => {
    setMessages(snapshot.docs.map(docs => ({id:docs.id, data: docs.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Please enter username"))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    
    setInput('')

  }

  return (

    
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h1>Welcome {username} </h1>
      <form className="app__form">

        <FormControl className="app__formControl">
        
        <Input className="app__input" placeholder="Enter a message" type="text" value={input} onChange={e => setInput(e.target.value)} />
        <Button className="app__iconButton" variant="contained" color="primary" type="submit" disabled={!input} onClick={sendMessage}> <IoSend /></Button>
        </FormControl>
        
        
      </form>
      <FlipMove>
      {
        messages.map( message => (
          <Message key={message.id} username={username} messagec={message.data} />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
