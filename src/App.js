import React, {useState, useEffect} from 'react';
import './App.css';
import {Button} from '@material-ui/core';
import { FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './Message';
import {db} from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})));
    })
  }, [])
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=80&h=80"/>
      <h1>Welcome {username}</h1>
      <form className="app_form">
      <FormControl className="app_formcontrol">
        <InputLabel>Enter a message...</InputLabel>
        <Input className="app_input" value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className="app_iconbutton" disabled={!input} variant="contained" color="primary" onClick={sendMessage} type="submit">
          <SendIcon className="app_iconbutton"/>
        </IconButton>
      </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
