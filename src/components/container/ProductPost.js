import React, { Component, useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux";
import { Container, Col } from "react-bootstrap";
import Post from "../Product/Post.jsx";

class ProductPost extends Component{
    state = {
        products: []
    }

    componentDidMount(){
        fetch('http://localhost:3001/productData')
        .then(response => response.json())
        .then(jsonHasilDariAPI => {
            this.setState({
                products: jsonHasilDariAPI
            })
        })
    }

    

    render(){
        return(
            <>
                <Fragment> 
                    <Container className="d-flex justify-content-between flex-wrap">
                        <Col xs={12} className="d-flex justify-content-center mt-4 bg-white">
                            <h3>
                                Welcome to our Catalog. Total <b>12</b> Products!
                            </h3>
                            </Col>
                                
                                {this.state.products.map(item => {
                                    
                                        return <Post {...item}/>
                                    
                                })}
                    </Container>
                </Fragment>
            </>
        )
    }
}

export default ProductPost;