import createItem from "./services/itens.js";
import * as cartService from "./services/cart.js"

const myCart = [];

const item1 = await createItem("hotwheels red", 20.99, 3)
const item2 = await createItem("hotwheels white", 39.99, 1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.handleQuantity(myCart, item1, "minus")

await cartService.displayCart(myCart)
