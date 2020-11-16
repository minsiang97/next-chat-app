import React, {useEffect, useState} from 'react';
import './App.css';
import DisplayConv from './components/DisplayConv';
import DisplayIcon from './components/DisplayIcon';
import DisplayUser from './components/DisplayUser';
import Socket from "./utils/socket";

function App() {
  const [message,setMessage] = useState('')
  const [convs,setConv] = useState([])
  const [username, setUsername] = useState ("")
  const [onlineUser, setOnlineUser] = useState([])

  useEffect (() => {
    Socket.emit ('NEW_USER')

    Socket.on ('GET_CURRENT_USER', user => {
      console.log(user)
      const {username} = user
      setUsername(username)
    })

    Socket.on('UPDATE_USER_LIST', users => {
      setOnlineUser(users)
    })

    Socket.on('RECEIVE_BROADCAST' , data => {
      console.log(data)
      setConv((prev) =>{
        return [...prev, data]
      })
    })
  },[])

  return (
    <>
    
    <div className="App" style = {{
      display : "flex",
      height : "80%",
      flexWrap : "wrap",
      width : "70%",
      justifyContent : "center",
      margin : "auto",
      textAlign : "left",
      marginTop : "30px",
      backgroundColor : "#212020"
    }}>


      <DisplayIcon/>
      <DisplayConv convs = {convs} setConv= {setConv} message = {message} setMessage ={setMessage} username = {username}/>
      <DisplayUser onlineUser = {onlineUser} setOnlineUser = {setOnlineUser}/>
    </div>
    </>
  );
}

export default App;
