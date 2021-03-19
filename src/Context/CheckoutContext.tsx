import React, { createContext, FunctionComponent, useContext, useState } from 'react'
import { ShippingMethod } from '../DB/ShippingMethods'

interface CheckoutContextValue {
  // saveUserInfo: (name: string, email: string, mobile: string, deliveryaddress: string, city: string, postnumber: string) => void;
  saveShippingMethod: (shippingMethod: ShippingMethod) => void;
  savePaymentMethod: (name: string, price: number, deliveryTime: string) => void
}

// type User = {
//   name: string,
//   email: string,
//   mobile: string,
//   deliveryaddress: string,
//   city: string,
//   postnumber: string
// }

export const CheckoutContext = createContext<CheckoutContextValue>({} as any)

export const CheckoutProvider: FunctionComponent = ( {children} ) => {
  const [checkout, setCheckout] = useState<[]>([])
  // const [userInfo, setUserInfo] = useState<User[]>([])
  // const [shipping, setShipping] = useState<[]>([])
  const [shippingObject, setShippingObject] = useState<ShippingMethod[]>([])
  const [payment, setPayment] = useState<[]>([])

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

  const saveShippingMethod = () => {

  }

  const savePaymentMethod = () => {

  }
  
  return (
    <CheckoutContext.Provider value={{
      saveShippingMethod,
      savePaymentMethod
    }}>
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckoutContext = () => useContext<CheckoutContextValue>(CheckoutContext)

