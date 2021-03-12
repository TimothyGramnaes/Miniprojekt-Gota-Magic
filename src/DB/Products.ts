interface Product {
    productname: string
    cardtype: string
    color: string
    cardtext: string
    expansion: string
    cmc: number
    pt: number
    image: string
    id: number
    price: number
    producttype: string
    view: boolean
}

export const products: Product[] = [
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
        {productname: "Ancestor's Chosen",
        cardtype:"Creature — Human Cleric",
        color:"White",
        cardtext:"First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
        expansion:"Tenth Edition",
        cmc:7.0,
        pt:4,
        image:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
        id:2,
        price:79,
        producttype:"single",
        view:true,
        },
        {productname: "Ancestor's Chosen",
        cardtype:"Creature — Human Cleric",
        color:"White",
        cardtext:"First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
        expansion:"Tenth Edition",
        cmc:7.0,
        pt:4,
        image:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
        id:3,
        price:79,
        producttype:"single",
        view:true,
        },
    ]