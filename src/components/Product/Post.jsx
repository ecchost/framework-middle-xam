import React, { useEffect } from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseProductStock, addToBasket, addToBasketItem } from "../../redux";
import PDP from "../home/PDP.js";

function Post(props) {
  const item = props;
  const dispatch = useDispatch();
  const basketList = useSelector(state => state.basket); 
  const fallBackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikVhGsLPMUq5TInJ--3ossfcT7ZyDUFM9e0mOgSQN6TEHQugJ&s"

  let{...singleItem} = props;
  
  const handelDispatches = item => { 
      singleItem.purchasedUnits += 1;
      
      dispatch(decreaseProductStock(item));

      basketList.unitArray.includes(item)
        ? dispatch(addToBasketItem(item, item.SKU))
        : dispatch(addToBasket(item, 1));
  };

  // const decreaseAmountProduct = (item) => {
  //   if(item.amount > 0){
  //     dispatch(decreaseProductStock(item))
  //     item.purchasedUnits += 1;

      
  //   }  
  //   basketList.unitArray.includes(item)
  //       ? dispatch(addToBasketItem(item, item.SKU))
  //       : dispatch(addToBasket(item, 1));
  //   // else {
  //   //   alert("The product is not in stock.");
  //   // }
  // };

  function addToBasketKeranjang(){

    if(item.purchasedUnits == 0){
      
      const itemst = {
        "id": item.SKU,
        "name": item.name,
        "price": item.price,
        "stock": item.stock,
        "purchasedUnits": 1,
        "img": item.img,
        "comment": item.comment
      }
  
      return fetch('http://localhost:3002/keranjang', {
        method : "post",
        body : JSON.stringify(itemst),
        headers: {
          'Content-type': 'application/json'
        }
      }
      ).then(response => response.json())
    } else {
      updateBasketKeranjang()
    }
  };

  function updateBasketKeranjang(item){
    item.purchasedUnits += 1;
    const itemst = {
      "id": item.SKU,
      "name": item.name,
      "price": item.price,
      "stock": item.stock,
      "purchasedUnits": item.purchasedUnits,
      "img": item.img,
      "comment": item.comment
    }
    return fetch('http://localhost:3002/keranjang/'+item.SKU, {
      method : "PUT",
      mode : "CORS",
      body : JSON.stringify(itemst),
      headers: {
        'Content-type': 'application/json'
      }
    }
    ).then(response => response.json())
  };

  useEffect(() => {  
    localStorage.setItem("Basket", JSON.stringify(basketList)); 
  }, [basketList]);

  return (
    <Card id={item.SKU} className="text-center p-0 mt-4">
      <Card.Img
        variant="top"  
        style={imgCard}
        src={ (item.img.length === 0) ? fallBackImg : item.img } 
      />
      <Card.Header>{item.name}</Card.Header>
      <Card.Text><br></br>
        <h4>Rp. {item.price}</h4>
      </Card.Text>
      <Card.Body style={cardBody}>
        <Card.Text>
          We have <b>{item.stock}</b> in stock.
        </Card.Text>
        {/* <small>{item.comment}</small> */}
        <ButtonGroup
          className="d-flex flex-column mt-2"
          aria-label="Basic example"
        >
          <Button
            className="font-weight-bold"
            variant="primary"
            disabled={item.stock === 0 ? true : false}
            
            onClick={() => {
              // decreaseAmountProduct(singleItem)
              handelDispatches(item)
              addToBasketKeranjang()
              }
            }
            
            // onClick={() => handelDispatches(item)}
          >
            {/* Buy a {item.name} */}
            Add to Cart
          </Button>
          <PDP info={item} />
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

const imgCard = {
  height: "190px",
  width: "250px",
  objectFit: "cover"
};

const cardBody = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

export default Post;
