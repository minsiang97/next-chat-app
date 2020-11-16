import React from "react"
import { Button, Icon } from 'semantic-ui-react'
import Socket from "../utils/socket"

const Form = ({message,setMessage, setConv, convs,username}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            username: username,
            message: message,
            timestamp: Date.now()
            
        }
        if (message.length < 1 || message.length > 500) {
            alert("Please enter message (Less than 500 characters)")
        } else {
            console.log(e.target)
            // newConversations.push({ username: username , message : text, timestamp: Date.now()})
            Socket.emit('BROADCAST_MESSAGE', data)
        }
        setMessage("")

    }
    return (
        <form style = {{
            display : "flex",
            border : "none",
            borderTop : "black solid 1px",
            padding : "10px",
            width : "100%",
            position : "absolute",
            bottom : "0%",
            
            
            
        }}onSubmit = {(handleSubmit)}>
            <input style = {{
                width : "100%",
                height : "52px",
                border : "white 1px solid",
                outline : "none",
                fontSize : "medium",
                borderRadius : "0%"
            }} onChange={e => setMessage(e.target.value)} type = "text" placeholder = "Type something..." value = {message}/> 
            <Button style = {{
                backgroundColor : "white",
                margin : "0",
                borderRadius : "0%"
            }}>
                <Icon style = {{
                    height : "5px",
                    width : "5px",
                }} name = "paperclip" />
            </Button>
            <Button style = {{
                backgroundColor : "white",
                borderRadius : "0%"
            }}>
                <Icon style = {{
                    height : "5px",
                    width : "5px",
                }} name = "gift" />
            </Button>
            <Button style = {{
                height : "52px",
                width : "72px"
            }}primary type = "submit" disabled = {!message}>Send</Button>   
            
        </form>
    )
}

export default Form