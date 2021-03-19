import React, { createContext, FunctionComponent, useState } from 'react'
import { ShippingMethod } from '../DB/ShippingMethods'

interface CheckoutContextValue {
  checkout: []
  saveUserInfo: () => void;
  saveShippingMethod: (shippingMethod: ShippingMethod) => void;
  savePaymentMethod: () => void
}

export const CheckoutContext = createContext<CheckoutContextValue>({} as any)

export const CheckoutProvider: FunctionComponent = ( children ) => {
  const [checkout, setCheckout] = useState<[]>([])

  const saveUserInfo = () => {
    
  }

  const saveShippingMethod = () => {

  }

  const savePaymentMethod = () => {

  }
  
  return (
    <CheckoutContext.Provider value={{
      checkout,
      saveUserInfo,
      saveShippingMethod,
      savePaymentMethod
    }}>
      {children}
    </CheckoutContext.Provider>
  )
}


