import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Animated } from "react-animated-css";
import { Table } from "react-bootstrap";
import { addToBasket } from "../../redux";
import { Container, Card, ListGroup } from "react-bootstrap";
import CheckoutItem from "./CheckoutItem";
import ResetButton from "../button/ResetBtn";
import PurchaseButton from "../button/PurchaseBtn";
import BackHomeBtn from "../button/BackHomeBtn";
import Alerts from "../Alerts";

function Checkout() {
  const dispatch = useDispatch();
  const completeOrder = useSelector(state => state.basket);
  const stateBasket = completeOrder.unitArray;
  const browserBasket = JSON.parse(localStorage.getItem("Basket"));
  const emtyBasketText = "No items are in the basket yet ...";

  const [products, setProducts] = useState();

  useEffect(() => {
    keranjangAPI()
    if (
      browserBasket !== null &&
      browserBasket.unitArray.length !== 0 &&
      stateBasket.length === 0
    ) {
      browserBasket.unitArray.forEach(el => {
        dispatch(addToBasket(el, el.purchasedUnits));
      });
    }
  }, [browserBasket]);

  function keranjangAPI(){
    fetch('http://localhost:3001/keranjang')
    .then(response => response.json())
    .then(jsonHasilDariAPI => {
        setProducts(jsonHasilDariAPI)
    })
  }

  return (
    <Container>
      <Card className="text-center mt-4">
        <Card.Header>BASKET</Card.Header>
        <Card.Body style={cardBody}>
          {completeOrder.numberOfUnits === 0 ? (
            <Alerts mess={emtyBasketText} />
          ) : (
      
            <>
              <ListGroup.Item variant="light" style={listItem}>
                Sum of items: {completeOrder.numberOfUnits}
              </ListGroup.Item>

              <Animated animationIn="pulse">
              <Table className="pt-4" hover>
                <thead>
                  <tr>
                    <th style={cell} className="bg-light">
                      Product Name
                    </th>
                    <th style={cell}>Price</th>
                    <th style={cell} className="bg-light">
                      Quantity
                    </th>
                    <th style={cell}>Total Price</th>
                    <th style={cell} className="bg-light">
                      Action
                    </th>
                  </tr>
                </thead>
              </Table>
              </Animated>

              {/* <table className="table">
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </table> */}

              {/* {stateBasket.map((p, i) => (
                <CheckoutItem key={i} data={p} />
              ))} */}
              {
                  products.map(item => {
                    return <CheckoutItem {...item} className="d-flex"/>
                })
                }
              <BackHomeBtn />
              <PurchaseButton />
              <ResetButton />
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

const cardBody = {
  minHeight: "500px"
};

const listItem = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
};

const cell = {
  wordBreak: "break-all"
};

export default Checkout;
