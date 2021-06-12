import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react'
import "./Message.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Message = forwardRef(({username, messagec}, ref) =>  {

    const isUser = (username === messagec.username)
    const isNull = (messagec.username === '')
    
    return (
        
        
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <div className="float-start">{(isNull ? "Unknown User :" : (isUser? '' : (messagec.username)+":")) }</div><br />
        <Card className={isUser ? "bg-primary" : "bg-warning"}>
        <CardContent >
        <Typography  color="white" variant="h5" component= "h2">
         {messagec.message}
        </Typography>
        </CardContent>
        </Card>
        </div>

            
            
        
    )
})

export default Message
