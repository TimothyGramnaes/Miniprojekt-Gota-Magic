import React, {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { PaymentMethod, PaymentMethods } from "../DB/PaymentMethods";
import { ShippingMethod, shippingMethods } from "../DB/ShippingMethods";

// functions and varibles that works through context
interface CheckoutContextValue {
  saveUserInformation: (name: string, email: string, mobile: string, deliveryaddress: string, city: string, postnumber: string, validated: boolean ) => void;
  saveShippingMethod: (id: string) => void;
  savePaymentMethod: (cardId: string) => void;
  getValidation: (value:boolean) => void;
  userInfo: User[];
  payment: PaymentMethod[];
  shippingObject: ShippingMethod[];
  orderNumber: number;
  validatedUser: boolean
  addOrderNumber: () => void
  validatedShipping: boolean
  validatedPayment: boolean
  getValidationShipping: (value:boolean) => void;
  getValidationPayment: (value:boolean) => void;
}

// Interface for userinput from Checkout1UserInfo
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

// When page never been used, this value sets as ordernumber
const baseOrderNumber:number = 1000


export const CheckoutProvider: FunctionComponent = ({ children }) => {

  const [userInfo, setUserInfo] = useState<User[]>([])
  const [shippingObject, setShippingObject] = useState<ShippingMethod[]>([]); 
  const [payment, setPayment] = useState<PaymentMethod[]>([]);

  const [orderNumber, setOrderNumber] = useState<number>(baseOrderNumber)

  // Fetch ordernumber from LS
    useEffect(() => {   
      const data = localStorage.getItem('orderNumber') || "[]"
      if (data) {
        if(data === "[]") {
          setOrderNumber(1000)
        } else {
        setOrderNumber(JSON.parse(data))
      }
      }
  }, [] )

  // This useEffect saves the ordernumber to LS
  useEffect(() => {    
      localStorage.setItem('orderNumber', JSON.stringify(orderNumber))
  })

  // Function that increase the ordernumber when order is done and the orderconfirmation shows
  const addOrderNumber = () => {
    let oldOrderNumber:number = orderNumber
    setOrderNumber(oldOrderNumber+1)
  }

  // Function to get the checkout userinformation
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

  // A boolean that sends a true or false to BreadCrumbs to activate the next button at the CheckOut1UserInfo
  const [validatedUser, setValidatedUser] = useState<boolean>(false)

  // A boolean that sends a true or false to BreadCrumbs to activate the next button at the CheckOut1UserInfo
  const [validatedShipping, setValidatedShipping] = useState<boolean>(false)
  
  // A boolean that sends a true or false to BreadCrumbs to activate the next button at the CheckOut1UserInfo
  const [validatedPayment, setValidatedPayment] = useState<boolean>(false)

  // Gets the boolean from CheckOut1UserInfo
  const getValidation = (value:boolean) => {
    setValidatedUser(value)      
  }
  // Gets the boolean from CheckOut1UserInfo
  const getValidationShipping = (value:boolean) => {
    setValidatedShipping(value)      
  }
  // Gets the boolean from CheckOut1UserInfo
  const getValidationPayment = (value:boolean) => {
    setValidatedPayment(value)      
  }

  // Saves the shippinginformation from CheckOut2Shipping
  const saveShippingMethod = (id: string) => {
    const freightValue = parseInt(id);
    const selectedShipping = shippingMethods.filter((s) => {
      if (s.id === freightValue) {return freightValue}
      else {return null};
    });

    setShippingObject([...selectedShipping]);
    
  };

  // Saves the paymentinformation from CheckOut3Payment
  const savePaymentMethod = (cardId: string) => {
    const selectedPayment = PaymentMethods.filter((p) => {
      if (p.cardId === parseInt(cardId)) {return cardId;}
      else {return null}
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
        addOrderNumber,
        payment,
        shippingObject,
        orderNumber,
        validatedShipping,
        validatedPayment,
        getValidationShipping,
        getValidationPayment

      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () =>
  useContext<CheckoutContextValue>(CheckoutContext);
