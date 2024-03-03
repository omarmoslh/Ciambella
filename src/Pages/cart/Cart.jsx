import React, { useContext } from "react";
import { MenuList } from "../../helpers/MenuList";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {MenuList.map((MenuItem) => {
          if (cartItems[MenuItem.id] !== 0) {
            return <CartItem data={MenuItem} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            checkout{" "}
          </button>
        </div>
      ) : (
        <h1>Your Cart Is Empaty</h1>
      )}
    </div>
  );
};
