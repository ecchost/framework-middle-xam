import React from 'react';  
import { useSelector } from 'react-redux'; 
import { Button} from 'react-bootstrap';  

function PurchaseButton() {   
    const completeOrder = useSelector(state => state.basket); 

    const url = 'https://jsonplaceholder.typicode.com/users';   
  
    const handelPurchase = () => {    
        fetch(url, {  
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({completeOrder})
        }) 
        .then((res) => res.json())
        .then((json) => {
            console.log('Success', json);
            alert('Your order has been sent!');
        })
        .catch (err => {
            alert('An error has occured: '+ err.message);
        })
    }  

    return (
        <Button className="d-flex justify-content-center col-12 m-2" 
            variant="danger" 
            onClick={handelPurchase}>
                Buy
        </Button>
    )
}

export default PurchaseButton;
