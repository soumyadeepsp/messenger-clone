import React, {forwardRef} from 'react';
import './Message.css';
import {Card, Typography, CardContent} from '@material-ui/core';

const message = forwardRef(({username, message}, ref) => {
    const isUser = username===message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {!isUser && `${message.username || 'Unknown user'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default message;
