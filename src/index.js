import cart, * as cartServices from './services/cart.js';
import { createItem } from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("🤑 Welcome to the your Weed Cart!\n");

// Criando itens : 🖌
const item1 = await createItem("Strain (1) - Mint", 5, 8);
const item2 = await createItem("Strain (2) - GoldGreen", 15, 2);
const item3 = await createItem("Strain (3) - Blueberry", 12, 4);
const item4 = await createItem("Strain (4) - GrandDaddy", 2, 4);
const item5 = await createItem("Strain (5) - WhiteWindow", 2, 6);
const item6 = await createItem("Strain (6) - Gorila Glue", 2, 4);

//📓 -> Adicionando itens : 📥
await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);
await cartServices.addItem(myCart, item4);
await cartServices.addItem(myWhishList, item3);
await cartServices.addItem(myWhishList, item5);
await cartServices.addItem(myWhishList, item6);

//📓 -> Exibindo itens : 👓
await cartServices.displayCart(myCart);
await cartServices.displayWhishList(myWhishList);

//📓 -> Removendo itens e deletando : 🐱‍👤
await cartServices.removeItem(myCart, 2);
// await cartServices.deleteItemFromCart(myCart, item2);

//📓 -> Totalizando Meu Carrinho e Minha Lista de Desejos : 🛒💜
await cartServices.totalItemsInCart(myCart);
await cartServices.totalItemsInCart(myWhishList); 
