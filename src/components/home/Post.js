import React, { useEffect } from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseProductStock, addToBasket, addToBasketItem } from "../../redux";
import PDP from "./PDP";

function Post(props) {
  const item = props.product;
  const dispatch = useDispatch();
  const basketList = useSelector(state => state.basket); 
  const fallBackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikVhGsLPMUq5TInJ--3ossfcT7ZyDUFM9e0mOgSQN6TEHQugJ&s"

  const handelDispatches = item => { 
    if (item.stock !== 0) {
      item.stock -= 1;
      item.purchasedUnits += 1;
      
      dispatch(decreaseProductStock(item));

      basketList.unitArray.includes(item)
        ? dispatch(addToBasketItem(item, item.SKU))
        : dispatch(addToBasket(item, 1));
    } else {
      alert("The product is not in stock.");
    }
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
        <small>{item.comment}</small>
        <ButtonGroup
          className="d-flex flex-column mt-2"
          aria-label="Basic example"
        >
          <Button
            className="font-weight-bold"
            variant="primary"
            disabled={item.stock === 0 ? true : false}
            onClick={() => handelDispatches(item)}
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
  height: "200px",
  minWidth: "200px",
  objectFit: "cover"
};

const cardBody = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

export default Post;
