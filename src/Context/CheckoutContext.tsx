import React, {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
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
  addOrderNumber: () => void
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

const baseOrderNumber:number = 0

export const CheckoutProvider: FunctionComponent = ({ children }) => {
  const [checkout, setCheckout] = useState<[]>([]);
  const [userInfo, setUserInfo] = useState<User[]>([])
  const [shippingObject, setShippingObject] = useState<ShippingMethod[]>([]);
  const [payment, setPayment] = useState<PaymentMethod[]>([]);

  const [orderNumber, setOrderNumber] = useState<number>(0)
  const helaOrdern = [orderNumber, ...userInfo, ...shippingObject, ...payment]
  
  console.log(helaOrdern)
  


  // Fetch ordernumber from LS
    useEffect(() => {   
      const data = localStorage.getItem('orderNumber') || "[]"
      if (data) {
        if(data === "[]") {
          setOrderNumber(0)
        } else {
        setOrderNumber(JSON.parse(data))
      }
      }
  }, [] )

  // This useEffect saves the ordernumber to LS
  useEffect(() => {    
      localStorage.setItem('orderNumber', JSON.stringify(orderNumber))
  })

  const addOrderNumber = () => {
    let oldOrderNumber:number = orderNumber
    setOrderNumber(oldOrderNumber+1)
  }

  
  console.log(shippingObject)

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

    console.log(userInfo)
    console.log(orderNumber)
    console.log(payment)
    

  const [validatedUser, setValidatedUser] = useState<boolean>(false)

  const getValidation = (value:boolean) => {
    setValidatedUser(value)      
  }

  const saveShippingMethod = (id: string) => {
    const freightValue = parseInt(id);
    const selectedShipping = shippingMethods.filter((s) => {
      if (s.id == freightValue) return freightValue;
    });

    setShippingObject([...selectedShipping]);
  };

  const savePaymentMethod = (cardType: string, cardId: number) => {
    const selectedPayment = PaymentMethods.filter((p) => {
      if (p.cardId == cardId) return cardId;
    })
    setPayment([...selectedPayment])
  };

  return (
    <CheckoutContext.Provider
      value={{
        saveUserInformation,
        saveShippingMethod,
        savePaymentMethod,
        userInfo,
        getValidation,
        validatedUser,
        addOrderNumber
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () =>
  useContext<CheckoutContextValue>(CheckoutContext);
