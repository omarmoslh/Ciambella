import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import {MenuList} from "../helpers/MenuList";
import FormatCurrency from "./FormatCurrency";
const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = MenuList.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        alt="cart-img"
        style={{ width: "90px", height: "90px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div style={{fontSize: "0.9rem"}}>{FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="danger"
        size="sm"
        style={{fontSize: "0.8rem"}}
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
