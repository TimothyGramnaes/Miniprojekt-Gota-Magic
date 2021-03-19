export interface ShippingMethod {
  name: string;
  deliveryTime: string;
  price: number;
  id: number;
}

export const shippingMethods: ShippingMethod[] = [
  {
    name: "Postnord",
    deliveryTime: "14-21 arbetsdagar",
    price: 9,
    id: 1,
  },
  {
    name: "EarlyBird",
    deliveryTime: "1-3 arbetsdagar",
    price: 29,
    id: 2,
  },
  {
    name: "Instabox",
    deliveryTime: "1-3 arbetsdagar",
    price: 19,
    id: 3,
  },
  {
    name: "Brevduva",
    deliveryTime: "1 arbetsdag",
    price: 0,
    id: 4,
  },
  {
    name: "Magic Shipping",
    deliveryTime: "1 timme",
    price: 199,
    id: 5,
  },
];
