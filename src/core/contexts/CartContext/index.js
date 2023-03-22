import { node } from "prop-types";
import React from "react";

export const CartContext = React.createContext();

export function useCart() {
  return React.useContext(CartContext);
}

const reduce = (state, action) => {
  switch (action.type) {
    case "add":
      return [];

    case "remove":
      return [];

    case "purchase":
      return [];

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = React.useReducer(reduce, [
    { id: 1, price: 123, name: "Tshirt 1", quantity: 1, imageUrl: "1.jpg" },
    { id: 2, price: 13, name: "Tshirt 2", quantity: 3, imageUrl: "1.jpg" },
  ]);

  const purchaseCart = () => dispatch({ type: "purchase" });

  return (
    <CartContext.Provider value={[cart, { purchaseCart }]}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node,
};
