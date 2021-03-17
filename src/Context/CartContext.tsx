import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from "react";

type Context = {
  getCartSize: () => number;
  addToCart: (itemName: string, price: number, image: string) => void;
  cart: orderItem[];
  removeFromCart: (productName: string) => void;
};

const CartContext = createContext<Context>(undefined!);
type orderItem = {
  //   itemId: number;
  itemName: string;
  price: number;
  img: string;
  quantity: number;
};

export const CartContextProvider: FunctionComponent = ({ children }) => {
  const [cart, setCart] = useState<orderItem[]>([]);
  const getCartSize = () => {
    return cart.length;
  };

  const addToCart = (itemName: string, price: number, image: string) => {
    let existingItem = cart.find(
      (item) => item.itemName == itemName // tittar om två item har samma namn //
    ) as orderItem;
    let newItem: orderItem = {
      itemName: itemName,
      price: price,
      img: image,
      quantity: existingItem ? existingItem.quantity + 1 : 1, // om två item har samma namn ökar quantity med 1 //
    };

    let newCart = [
      ...cart.filter((item) => {
        return item.itemName !== itemName; // filtrerar bort dubletter bland items //
      }),
    ];
    setCart([...newCart, newItem]); // skapar upp en ny cart med new item med eventuell quantity //
    console.log(cart[1]);
  };

  const removeFromCart = (productName: string) => {
    let newCart = [
      ...cart.filter((item) => {
        return item.itemName !== productName;
      }),
    ];
    setCart([...newCart]);
  };

  return (
    <CartContext.Provider
      value={{ getCartSize, addToCart, cart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext<Context>(CartContext);
