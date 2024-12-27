import cart, * as cartServices from './services/cart.js';
import { createItem } from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("🤑 Welcome to the your Shopee Cart!\n");

const item1 = await createItem("Strain - Mint", 9, 5);
const item2 = await createItem("Strain - GoldGreen", 15, 5);
const item3 = await createItem("Strain - Blueberry", 12, 5);

await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);
await cartServices.addItem(myWhishList, item3);

await cartServices.deleteItemFromCart(myCart, item2.name);

console.log(`🎄 Strain - Mint ==> R$:${item1.subtotal()}`);
console.log(`🎋 Strain - GoldGreen ==> R$:${item2.subtotal()}`);
console.log(`🍓 Strain - Blueberry ==> R$:${item3.subtotal()}\n`);

console.log("💰 Total result:")
await cartServices.totalItemsInCart(myCart);
await cartServices.totalItemsInCart(myWhishList); 
