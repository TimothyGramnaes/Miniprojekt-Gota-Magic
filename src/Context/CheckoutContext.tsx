import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from "react";
import { convertCompilerOptionsFromJson } from "typescript";
import { ShippingMethod, shippingMethods } from "../DB/ShippingMethods";

interface CheckoutContextValue {
  saveUserInformation: (name: string, email: string, mobile: string, deliveryaddress: string, city: string, postnumber: string) => void;
  saveShippingMethod: (id: string) => void;
  savePaymentMethod: (
    name: string,
    price: number,
    deliveryTime: string
  ) => void;
  userInfo: User[]
}

type User = {
  name: string,
  email: string,
  mobile: string,
  deliveryaddress: string,
  city: string,
  postnumber: string
}

export const CheckoutContext = createContext<CheckoutContextValue>({} as any);

export const CheckoutProvider: FunctionComponent = ({ children }) => {
  const [checkout, setCheckout] = useState<[]>([]);
  const [userInfo, setUserInfo] = useState<User[]>([])
  // const [shipping, setShipping] = useState<[]>([])
  const [shippingObject, setShippingObject] = useState<ShippingMethod[]>([]);
  const [payment, setPayment] = useState<[]>([]);

  const saveUserInformation = (
    name: string,
    email: string,
    mobile: string,
    deliveryaddress: string,
    city: string,
    postnumber: string) => {
      setUserInfo([{
          name: name,
          email: email,
          mobile: mobile,
          deliveryaddress: deliveryaddress,
          city: city,
          postnumber: postnumber   
      }])
    }
  
    console.log(userInfo)

  // const saveUserInfo = (name: string,
  //   email: string,
  //   mobile: string,
  //   deliveryaddress: string,
  //   city: string,
  //   postnumber: string ) => {

  //   const newUserInfo =
  //   {
  //     name: name,
  //     email: email,
  //     mobile: mobile,
  //     deliveryaddress: deliveryaddress,
  //     city: city,
  //     postnumber: postnumber
  //   }
  //   setUserInfo([...userInfo, newUserInfo])
  //   console.log(userInfo)
  // }

  const saveShippingMethod = (id: string) => {
    const freightValue = parseInt(id);
    const selectedShipping = shippingMethods.filter((s) => {
      if (s.id == freightValue) return freightValue;
    });

    setShippingObject([...selectedShipping]);
  };
  console.log(shippingObject);

  const savePaymentMethod = () => {};

  return (
    <CheckoutContext.Provider
      value={{
        saveUserInformation,
        saveShippingMethod,
        savePaymentMethod,
        userInfo
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () =>
  useContext<CheckoutContextValue>(CheckoutContext);
