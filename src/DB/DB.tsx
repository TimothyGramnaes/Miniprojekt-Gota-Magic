import React, { useState } from 'react';

interface Props {}

interface State {
    prouctList: Product[]
}

interface Product {
    productname: string
    cardtype: string
    color: string
    cardtext: string
    expansion: string
    cmc: string
    pt: number
    image: string
    id: number
    price: number
    producttype: string
    view: boolean
}

function DB(props:Props, state:State){

    const [products, setProducts] = useState([
        {productname: "Ancestor's Chosen",
        cardtype:"Creature — Human Cleric",
        color:"White",
        cardtext:"First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
        expansion:"Tenth Edition",
        cmc:7.0,
        pt:4,
        image:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
        id:1,
        price:79,
        producttype:"single",
        view:true,
        },
    ])

    console.log(products[0].productname)

    return(
        <p>{products[0].image}</p>
    )
}

export default DB