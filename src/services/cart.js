// 🟨 Display --> Lista de Compras
export const displayCart = async (userCart) => {
    console.log("🛒 Weeds list cart:\n");

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}. x Unid: ${item.quantity} = R$ ${item.subtotal()}`
        );
    });
}

// 🟨 Display --> Lista de Desejos
export const displayWhishList = async (userCartWishList) => {
    console.log("\n🛒 Weeds wish list cart:\n");

    userCartWishList.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} | Qts: ${item.quantity} = R$:${item.subtotal()}`
        );
    });
}

// 🟨 Add --> Lista de Compras || Lista de Desejos
export const addItem = async (userCart, item) => {
    userCart.push(item);
}

// 🟨 Total --> Lista de Compras || Lista de Desejos
export const totalItemsInCart = async (userCart) => {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\n💰 Total result:", `R$ ${result}`)
}

// 🟨 Remove --> Lista de Compras || Lista de Desejos
export const removeItem = async (userCart, index) => {
    const deleteIndex = index - 1;

    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
        console.log(`🔥 Remove: "${userCart[deleteIndex].name}" removido com sucesso!\n`);
    }
}

// 🟨 Delete --> Lista de Compras || Lista de Desejos
export const deleteItemFromCart = async (userCart, item) => {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound !== -1) {
        console.log(`\n🔥 Item não encontra`);
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}


export default {
    addItem,
    totalItemsInCart,
    removeItemFromCart: removeItem,
    deleteItemFromCart,
    displayCart,
    displayWhishList
}