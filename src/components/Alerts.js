import React from 'react'; 
import { Alert } from 'react-bootstrap';  

function Alerts(props) { 
    return (
        <Alert variant="light"> 
            <h5>{props.mess}</h5>
        </Alert> 
    )
}

export default Alerts;
