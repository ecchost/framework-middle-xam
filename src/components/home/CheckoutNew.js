import React, { Component, useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux";
import { Container, Card,  ListGroup, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { Table } from "react-bootstrap";
import Checkout from "../home/CheckoutItem.jsx";
import CheckoutItem from "./CheckoutItem";
import ResetButton from "../button/ResetBtn";
import PurchaseButton from "../button/PurchaseBtn";
import BackHomeBtn from "../button/BackHomeBtn";
import Alerts from "../Alerts";

class CheckoutNew extends Component{

    state = {
        keranjang: []
    }

    componentDidMount(){
        fetch('http://localhost:3002/keranjang')
        .then(response => response.json())
        .then(jsonHasilDariAPI => {
            this.setState({
                keranjang: jsonHasilDariAPI
            })
        })  
    }

    render(){
        return(
            <>
                <Container>
                <Card className="text-center mt-4">
                    <Card.Header>BASKET</Card.Header>
                    <Card.Body style={cardBody}>
                    {this.state.keranjang    === 0 ? (
                        <Alerts mess={"No items are in the basket yet ..."} />
                    ) : (
                
                        <>

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
                        
                        
                            {
                                this.state.keranjang.map(item => {
                                    return <CheckoutItem {...item} className="d-flex"/>
                                })
                            }
                            <tr>
                                <th></th>
                                <th></th>
                                <th><p>Total Price : </p></th>
                                <th></th>
                                <th></th>
                                
                            </tr>
                            </Table>
                            
                            </Animated>
                        <BackHomeBtn />
                        <PurchaseButton />
                        <ResetButton />
                        </>
                    )}
                    </Card.Body>
                </Card>
                </Container>
            </>
        )
    }
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

export default CheckoutNew;