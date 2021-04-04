import React from "react";
import { useDispatch } from "react-redux";
import { resetBasket, resetProducts } from "../../redux";
import { Button } from "react-bootstrap";

function ResetButton() {
  const dispatch = useDispatch();

  const handelReset = () => {
    dispatch(resetBasket());
    dispatch(resetProducts());
    localStorage.removeItem("Basket");
  };

  return (
    <Button
      className="d-flex justify-content-center col-12 m-2"
      variant="warning"
      onClick={handelReset}
    >
      Emty out your Basket
    </Button>
  );
}

export default ResetButton;
