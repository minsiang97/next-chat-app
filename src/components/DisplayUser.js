import React from "react"

const DisplayUser = ({onlineUser}) => {
    return (
        <div style = {{
            border : "black solid 2px",
            height : "600px",
            width : "20%",
            
        }}>
            <header style = {{
                borderBottom : "black solid 1px"
            }}>
                <h2 style = {{
                    margin : "10px",
                    color : "white"
                }}>Online Users</h2>
            </header>

            <div style = {{
                color :"white",
                textAlign : "center",
                marginTop : "20px"
            }}>
            {
                onlineUser.map((online)=>{
                    return(
                    <p>{online.username}</p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default DisplayUser