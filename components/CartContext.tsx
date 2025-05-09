import React, { createContext, useState, useContext } from "react";

type CartItem = {
  title: string;
  quantity: number;
  price?: number | undefined;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    console.log("mai plus mai chla hun");

    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.title === item.title);
      if (existingItem) {
        return prevCart.map((i) =>
          i.title === item.title
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        return [...prevCart, item];
      }
    });
  };
  // console.log("Cart contents:", cart);

  const removeFromCart = (item: CartItem) => {
    console.log("mai minus mai chla hun");
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.title === item.title);
      if (existingItem) {
        if (existingItem.quantity > item.quantity) {
          return prevCart.map((i) =>
            i.title === item.title
              ? { ...i, quantity: i.quantity - item.quantity }
              : i
          );
        } else {
          return prevCart.filter((i) => i.title !== item.title);
        }
      }
      return prevCart;
    });
  };
  //   const clearCart = () => {
  //     setCart([]);
  //   };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
