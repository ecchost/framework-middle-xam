import React from 'react';
import { Alert } from 'react-bootstrap'; 

 const Error = () => {
    return (
        <Alert variant='danger'>
            This URL path does not exist! 
        </Alert>
    );
}

export default Error; 