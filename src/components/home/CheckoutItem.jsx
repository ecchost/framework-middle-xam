import React from "react";
import { removeRow } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { Table } from "react-bootstrap";

function CheckoutItem(props) {
  const product = props;
  const dispatch = useDispatch();
  const basketAmount = useSelector(state => state.basket.unitArray);

  const handelRemoveRoe = () => {
    dispatch(removeRow(product));
  };

  function deletekeranjangAPI(){
    fetch('http://localhost:3002/keranjang/'+product.id,
      {
        method : "delete",
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(response => response.json())
  }

  return (
    <>
        <tr>
          <th className="bg-light">
            {product.name}
          </th>
          <th >Rp. {product.price}</th>
          <th className="bg-light">
            {product.purchasedUnits}
          </th>
          <th >{product.purchasedUnits*product.price}</th>
          <th className="bg-light">
            <Button variant="danger" onClick={() => { 
              handelRemoveRoe()
              deletekeranjangAPI()
            }
           } > Remove </Button>
          </th>
        </tr>

      {/* <table>
        <ListGroup/>
        <tr>
          <th>{product.name}</th>
          <th>Rp. {product.price}</th>
          <th> {product.purchasedUnits}</th>
          <th> {product.purchasedUnits*product.price}</th>
          <th><Button variant="outline-danger" onClick={handelRemoveRoe} disabled={basketAmount.length > 1 ? false : true}> Remove </Button></th>
        </tr>
      </table>  */}
      </>
  );
}

const listItem = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
};



export default CheckoutItem;
