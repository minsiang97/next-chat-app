import React from "react"
import { Button, Icon } from 'semantic-ui-react'

const DisplayIcon = () => {
    return (
        <div style = {{
            height : "600px",
            border : "black solid 2px",
            width : "10%"
        }}>
            <div style = {{
                margin : "15px"
            }}>
                <Button style = {{
                    borderRadius : "50%",
                    height : "50px",
                    width : "55px",
                    marginTop : "20px"
                }}>
                    <Icon style = {{
                        height : "5px",
                        width : "5px",
                    }} name = "twitter" />
                </Button>
                <Button style = {{
                    borderRadius : "50%",
                    height : "50px",
                    width : "55px",
                    marginTop : "20px"
                }}>
                    <Icon style = {{
                        height : "5px",
                        width : "5px",
                    }} name = "facebook" />
                </Button>
                <Button style = {{
                    borderRadius : "50%",
                    height : "50px",
                    width : "55px",
                    marginTop : "20px"
                }}>
                    <Icon style = {{
                        height : "5px",
                        width : "5px",
                    }} name = "snapchat" />
                </Button>
                <Button style = {{
                    borderRadius : "50%",
                    height : "50px",
                    width : "55px",
                    marginTop : "20px"
                }}>
                    <Icon style = {{
                        height : "5px",
                        width : "5px",
                        size : "large"
                    }} name = "instagram" />
                </Button>
                <Button style = {{
                    borderRadius : "50%",
                    height : "50px",
                    width : "55px",
                    marginTop : "20px"
                }}>
                    <Icon style = {{
                        height : "5px",
                        width : "5px",
                        size : "large"
                    }} name = "linkedin" />
                </Button>

                <Button style = {{
                    borderRadius : "50%",
                    height : "50px",
                    width : "55px",
                    marginTop : "20px"
                }}>
                    <Icon style = {{
                        height : "5px",
                        width : "5px",
                        size : "large"
                    }} name = "itunes" />
                </Button>

                <Button style = {{
                    borderRadius : "50%",
                    height : "50px",
                    width : "55px",
                    marginTop : "20px"
                }}>
                    <Icon style = {{
                        height : "3px",
                        width : "3px",
                        size : "large"
                    }} name = "youtube" />
                </Button>

                <Button style = {{
                    borderRadius : "50%",
                    height : "50px",
                    width : "55px",
                    marginTop : "20px"
                }}>
                    <Icon style = {{
                        height : "5px",
                        width : "5px",
                        size : "large"
                    }} name = "plus" />
                </Button>
            </div>
            
        </div>
    )
}

export default DisplayIcon