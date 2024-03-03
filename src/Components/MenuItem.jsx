import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button } from "react-bootstrap";
const MenuItem = ({ image, name, price, descraption, id }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <div className="col-md-4 pb-3">
        <div className="menu_col">
          <div className="card">
            <img src={image} className="" alt="..." />
            <span>{price} EGP</span>
            <div className="card-body">
              <h5>{name}</h5>
              <p>{descraption}</p>
              <div className="mt-auto">
                {quantity === 0 ? (
                  <button
                    className="btn-card"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    <FaCartPlus /> Add To Cart
                  </button>
                ) : (
                  <div
                    className="d-flex align-items-center flex-column"
                    style={{ gap: "0.5rem" }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ gap: "0.5rem" }}
                    >
                      <button
                        className="btn-card"
                        onClick={() => decreaseCartQuantity(id)}
                      >
                        -
                      </button>
                      <div className="quantity-in-cart">
                        
                        <button
                          className="btn-remove"
                          variant="danger"
                          size="sm"
                          onClick={() => removeFromCart(id)}
                        >
                          ({quantity}) remove
                        </button>
                      </div>
                      <button
                        className="btn-card"
                        onClick={() => increaseCartQuantity(id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
