import React, { createContext, useState, ReactNode } from "react";

import pizza1 from "./assets/images/pizza-1.png";
import pizza2 from "./assets/images/pizza-2.png";
import pizza3 from "./assets/images/pizza-3.png";
import pizza4 from "./assets/images/pizza-4.png";
import pizza5 from "./assets/images/pizza-5.png";
import pizza6 from "./assets/images/pizza-6.png";
import pizza7 from "./assets/images/pizza-7.png";
import pizza8 from "./assets/images/pizza-8.png";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  calories: string;
  fats: string;
}

interface Cart extends Product {
  quantity: number;
}

interface MenuCartContextType {
  menu: Product[];
  cart: Cart[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
  increaseQty: (itemId: number) => void;
  decreaseQty: (itemId: number) => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const MenuCartContext = createContext<MenuCartContextType | undefined>(
  undefined
);

const menu: Product[] = [
  {
    id: 1,
    image: pizza1,
    name: "BISMARCK",
    price: 30,
    calories: "800 kcal",
    fats: "50 g",
  },
  {
    id: 2,
    image: pizza2,
    name: "FIORI DI ZUCCA",
    price: 50,
    calories: "800 kcal",
    fats: "50 g",
  },
  {
    id: 3,
    image: pizza3,
    name: "VALDOSTANA",
    price: 55,
    calories: "800 kcal",
    fats: "50 g",
  },
  {
    id: 4,
    image: pizza4,
    name: "PIZZA TARTUFATA",
    price: 45,
    calories: "800 kcal",
    fats: "50 g",
  },
  {
    id: 5,
    image: pizza5,
    name: "FRANCESCANA",
    price: 25,
    calories: "800 kcal",
    fats: "50 g",
  },
  {
    id: 6,
    image: pizza6,
    name: "BOSCAIOLA",
    price: 85,
    calories: "800 kcal",
    fats: "50 g",
  },
  {
    id: 7,
    image: pizza7,
    name: "MARE E MONTI",
    price: 65,
    calories: "800 kcal",
    fats: "50 g",
  },
  {
    id: 8,
    image: pizza8,
    name: "MARE E MONTI",
    price: 95,
    calories: "800 kcal",
    fats: "50 g",
  },
];

const MenuCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const increaseQty = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQty = (itemId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <MenuCartContext.Provider
      value={{
        menu,
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </MenuCartContext.Provider>
  );
};

export { MenuCartContext, MenuCartProvider };
