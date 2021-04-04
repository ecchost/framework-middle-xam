import React from 'react'; 

import { NavLink } from "react-router-dom";
import { Button} from 'react-bootstrap'; 

function BackHomeBtn() {
    return (
        <Button className="d-flex justify-content-center col-12 m-2" 
            variant="light">
                <NavLink className="text-decoration-none text-dark" 
                    to="/"> 
                        Continue Shopping 
                </NavLink> 
        </Button> 
    )
}

export default BackHomeBtn;
