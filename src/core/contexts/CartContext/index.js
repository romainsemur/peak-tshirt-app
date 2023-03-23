import { node } from "prop-types";
import React from "react";

export const CartContext = React.createContext();

export function useCart() {
  return React.useContext(CartContext);
}

const reduce = (cart, action) => {
  switch (action.type) {
    case "add":
      const { cartItem } = action.payload;
      return [...cart, cartItem];

    case "remove":
      const { id } = action.payload;
      return cart.filter(({ id: tshirtId }) => tshirtId !== id);

    case "purchase":
      return [];

    default:
      return [...cart];
  }
};

// { id: 1, price: 123, name: "Tshirt 1", quantity: 1, imageUrl: "1.jpg" },
export function CartProvider({ children }) {
  const [cart, dispatch] = React.useReducer(reduce, []);

  const purchaseCart = () => dispatch({ type: "purchase" });
  const removeFromCart = (id) => () =>
    dispatch({ type: "remove", payload: { id } });

  const addToCart = (cartItem) => () =>
    dispatch({ type: "add", payload: { cartItem } });

  const isCartEmpty = cart.length === 0;
  const cartItemsQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const cartTotalPrice = cart.reduce(
    (totalPrice, item) => item.price * item.quantity + totalPrice,
    0
  );
  return (
    <CartContext.Provider
      value={[
        { cart, isCartEmpty, cartItemsQuantity, cartTotalPrice },
        { addToCart, removeFromCart, purchaseCart },
      ]}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node,
};
