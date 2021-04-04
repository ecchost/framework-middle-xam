import React, { useState } from 'react';
import { Modal, Figure, Button } from "react-bootstrap";

function PDP(props) {
    const product = props.info; 
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
      <>
        <Button className="mt-2" variant="light" onClick={handleShow}>
          Read more
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column bg-light">
            <Figure>
                <Figure.Image 
                    style={figureImg}
                    alt="figureImg"
                    src={product.img}
                />
                <Figure.Caption>
                    Healthy air Healthy Life.
                </Figure.Caption>
            </Figure>
            <span>SKU: <b>{product.SKU}</b></span> 
            <span>Price: <b>{product.price}</b></span>
            <span>Comment: <b>{product.comment}</b></span>
            <span>Purchased Units: <b>{product.purchasedUnits}</b></span>
            <span>Stock: <b>{product.stock}</b></span> 
          </Modal.Body>
          <Modal.Footer className="bg-light">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> 
          </Modal.Footer>
        </Modal>
      </>
    );
}

const figureImg = {
    maxHeight: '400px',
    width: '100%',
    objectFit: 'cover' 
}

export default PDP;
