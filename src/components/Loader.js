import React from "react";
import { Modal, Spinner } from "react-bootstrap";

function Loader(props) {
  return ( 
    <Modal show={props.show}>
      <Spinner style={loader} animation="border" variant="info" size="lg" />
    </Modal>  
  );
} 

const loader = {
  zIndex: 12,
  margin: "40%",
  height: "100px",
  width: "100px"
};

export default Loader;
