interface ShippingMethod {
  name: string,
  deliveryTime: string,
  price: number
}

export const shippingMethods: ShippingMethod[] = [
  {
    name: 'Postnord',
    deliveryTime: '14-21 arbetsdagar',
    price: 9
  },
  {
    name: 'EarlyBird',
    deliveryTime: '1-3 arbetsdagar',
    price: 29
  },
  {
    name: 'Instabox',
    deliveryTime: '1-3 arbetsdagar',
    price: 19
  },
  {
    name: 'Brevduva',
    deliveryTime: '1 arbetsdag',
    price: 0
  },
  {
    name: 'Magic Shipping',
    deliveryTime: '1 timme',
    price: 199
  },
]

consolelog()

function consolelog() {
  console.log(shippingMethods[1].name)
}



