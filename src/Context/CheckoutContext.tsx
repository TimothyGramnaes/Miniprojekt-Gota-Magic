import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from "react";
import { PaymentMethod, PaymentMethods } from "../DB/PaymentMethods";
import { ShippingMethod, shippingMethods } from "../DB/ShippingMethods";

interface CheckoutContextValue {
  saveUserInformation: (name: string, email: string, mobile: string, deliveryaddress: string, city: string, postnumber: string, validated: boolean ) => void;
  saveShippingMethod: (id: string) => void;
  savePaymentMethod: (cardType: string, cardId: number) => void;
  getValidation: (value:boolean) => void;
  userInfo: User[]
  validatedUser: boolean
}

type User = {
  name: string,
  email: string,
  mobile: string,
  deliveryaddress: string,
  city: string,
  postnumber: string,
  validated: boolean,
}

export const CheckoutContext = createContext<CheckoutContextValue>({} as any);

export const CheckoutProvider: FunctionComponent = ({ children }) => {
  const [checkout, setCheckout] = useState<[]>([]);
  const [userInfo, setUserInfo] = useState<User[]>([])
  const [shippingObject, setShippingObject] = useState<ShippingMethod[]>([]);
  const [payment, setPayment] = useState<PaymentMethod[]>([]);

  const saveUserInformation = (
    name: string,
    email: string,
    mobile: string,
    deliveryaddress: string,
    city: string,
    postnumber: string,
    validated: boolean) => {
      setUserInfo([{
          name: name,
          email: email,
          mobile: mobile,
          deliveryaddress: deliveryaddress,
          city: city,
          postnumber: postnumber,
          validated: validated   
      }])
    }

  const [validatedUser, setValidatedUser] = useState<boolean>(false)

  const getValidation = (value:boolean) => {
    setValidatedUser(value)      
  }

  console.log(validatedUser)

  const saveShippingMethod = (id: string) => {
    const freightValue = parseInt(id);
    const selectedShipping = shippingMethods.filter((s) => {
      if (s.id == freightValue) return freightValue;
    });

    setShippingObject([...selectedShipping]);
  };
  console.log(shippingObject);

  const savePaymentMethod = (cardType: string, cardId: number) => {
    const selectedPayment = PaymentMethods.filter((p) => {
      if (p.cardId == cardId) return cardId;
    })
    setPayment([...selectedPayment])
  };
  console.log(payment)

  return (
    <CheckoutContext.Provider
      value={{
        saveUserInformation,
        saveShippingMethod,
        savePaymentMethod,
        userInfo,
        getValidation,
        validatedUser
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () =>
  useContext<CheckoutContextValue>(CheckoutContext);
