import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import MenuItem from "./MenuItem";
import { MenuList } from "../helpers/MenuList";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-normal fs-5">
            Total Price:{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = MenuList.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
      <div className="check-btn">
        <button className="checkout-btn">Checkout</button>
      </div>
    </Offcanvas>
  );
};

export default ShoppingCart;
