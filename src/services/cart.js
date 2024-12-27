

export const addItem = async (userCart, item) => {
    userCart.push(item);
}

export const totalItemsInCart = async (userCart) => {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

export const removeItemFromCart = async (userCart, index) => {

}

export const deleteItemFromCart = async (userCart, name) => {
    const index = userCart.findIndex(item => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`🔥 Delete: "${name}" deletado com sucesso!\n`);
    }
}


export default {
    addItem,
    totalItemsInCart,
    removeItemFromCart,
    deleteItemFromCart
}