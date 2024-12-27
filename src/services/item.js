
export const createItem = async(name, price, quantity) => {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    };
};

