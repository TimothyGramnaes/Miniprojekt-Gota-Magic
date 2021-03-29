import React, {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { orderItem } from "../Types/orderItem";

type Context = {
  getCartSize: () => number;
  addToCart: (
    itemName: string,
    price: number,
    image: string,
    id: number
  ) => void;
  cart: orderItem[];
  removeFromCart: (productName: string) => void;
  decreaseQuantity: (item: orderItem) => void;
  totalPrice: number;
  ResetCart: () => void;
  resetCartLs: () => void;
  lsCart: orderItem[];
  cartTotalPrice: number;
};

const CartContext = createContext<Context>(undefined!);

export const CartContextProvider: FunctionComponent = ({ children }) => {
  const [cart, setCart] = useState<orderItem[]>([]);
  const [lsCart, setLsCart] = useState<orderItem[]>([]);
  const getCartSize = () => {
    return cart.length;
  };
  const totalPrice = lsCart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const cartTotalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const ResetCart = () => {
    getLsCart();
    setCart([...[]]);
  };

  const resetCartLs = () => {
    const cartData = localStorage.getItem("productCart") || "[]";
    if (cartData) {
      setLsCart([...JSON.parse(cartData)]);
    }
    localStorage.setItem("productCart", JSON.stringify([]));
  };

  useEffect(() => {
    const cartData = localStorage.getItem("productCart") || "[]";
    if (cartData) {
      setCart([...JSON.parse(cartData)]);
    }
  }, []);

  console.log(lsCart);

  const getLsCart = () => {
    const cartData = localStorage.getItem("productCart") || "[]";
    if (cartData) {
      setLsCart([...JSON.parse(cartData)]);
    }
  };

  useEffect(() => {
    localStorage.setItem("productCart", JSON.stringify(cart));
  }, [cart]);

  console.log(lsCart);
  const addToCart = (
    itemName: string,
    price: number,
    image: string,
    id: number
  ) => {
    let existingItem = cart.find(
      (item) => item.itemName === itemName // tittar om två item har samma namn //
    ) as orderItem;
    let newItem: orderItem = {
      itemName: itemName,
      price: price,
      img: image,
      quantity: existingItem ? existingItem.quantity + 1 : 1, // om två item har samma namn ökar quantity med 1 //
      id: id,
    };

    let newCart = [
      ...cart.filter((item) => {
        return item.itemName !== itemName; // filtrerar bort dubletter bland items //
      }),
    ];

    setCart([...newCart, newItem]); // skapar upp en ny cart med new item med eventuell quantity //
  };

  const removeFromCart = (productName: string) => {
    let newCart = [
      ...cart.filter((item) => {
        return item.itemName !== productName;
      }),
    ];
    setCart([...newCart]);
  };

  const decreaseQuantity = (item: orderItem) => {
    let existingItem = cart.find(
      (i) => i.itemName === item.itemName // tittar om två item har samma namn //
    ) as orderItem;

    let newItem: orderItem = {
      itemName: existingItem.itemName,
      price: existingItem.price,
      img: existingItem.img,
      quantity: existingItem.quantity - 1, // om två item har samma namn minskar quantity med 1 //
      id: existingItem.id,
    };

    let newCart = [
      ...cart.filter((i) => {
        return i.itemName !== item.itemName; // filtrerar bort dubletter bland items //
      }),
    ];

    if (newItem.quantity === 0) {
      setCart([...newCart]); // deletar itemet om quantity är mindre än 1 //
      return;
    }

    setCart([...newCart, newItem]); // skapar upp en ny cart med new item med eventuell quantity //
  };
  console.log(cart);
  console.log(lsCart);

  return (
    <CartContext.Provider
      value={{
        getCartSize,
        addToCart,
        cart,
        removeFromCart,
        decreaseQuantity,
        totalPrice,
        ResetCart,
        resetCartLs,
        lsCart,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext<Context>(CartContext);
