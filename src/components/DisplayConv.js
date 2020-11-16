import React from "react"
import { Image, List } from 'semantic-ui-react'
import Form from "./Form"
import moment from 'moment'
import smoke from '../images/smoke.jpg'


const DisplayConv = ({convs,setConv,message,setMessage,username}) => {
    
   

       
    
    
    return (
        
        <div style = {{
            width : "70%",
            height : "600px",
            border : "black solid 2px",
            position : "relative",
            
            
        }}>
            <header style = {{
                borderBottom : "black solid 1px",
                
            }}>
                <h2 style = {{
                    margin: "10px",
                    color : "white"
                }}>Live Chat</h2>
            </header>

            <div style = {{
                backgroundImage : `url(${smoke})`,
                height : "545px",
               
            }}>
            
            <div style = {{
                height : "470px",
                overflowY : "scroll",
                scrollbarColor : "yellow"

            }}>
                
                    <List style = {{
                        marginLeft : "10px",
                        display : "block",
                        
                        
                    }}>
                        <List.Item>
                            
                            <List.Content style = {{
                               paddingTop : "10px"
                            }}>
                                        {convs.map((conv) => (
                                            <>
                                            <Image avatar src = {`https://api.adorable.io/avatars/150/${conv.username}.png`} style = {{
                                            
                                            display : "inline-block"
                                            }}/>
                                            <List.Header as='a'style = {{
                                                color : "white",
                                                display : "inline-block",
                                                marginTop : "20px",
                                                marginLeft : "5px"
                                            }}>{conv.username}</List.Header>

                                            <List.Description style = {{
                                                marginTop : "5px",
                                                fontSize : "medium",
                                                color : "white"
                                            }}>{conv.message}</List.Description>

                                            <List.Description style = {{
                                                marginTop : "5px",
                                                fontSize : "medium",
                                                color : "white"
                                            }}>{moment(conv.timestamp).format("MMM Do YY")}</List.Description>
                                            </>
                                        ))}

                                        </List.Content>
                            </List.Item>
                        </List>

               
                
                            
                            
                
            

            </div>
            
            <Form convs = {convs} setConv= {setConv} message = {message} setMessage ={setMessage} username = {username}/>     
            </div>

                            
                

        </div>
    
    )
    
}

export default DisplayConv