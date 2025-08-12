
async function addItem(userCart, item) {
    userCart.push(item)
    return userCart
}

async function handleQuantity(userCart, item, action) {
    const findIndex = userCart.findIndex((itemCart) => itemCart.name == item.name)
    const quantity = userCart[findIndex].quantity
    if (action == "minus") {
        if (quantity > 0) {
            userCart[findIndex].quantity -= 1
            if (userCart[findIndex].quantity === 0) {
                deleteItem(userCart, item.name)
            }
        }
        return userCart
    }
    userCart[findIndex].quantity += 1
    if (userCart[findIndex].quantity === 0) {
        deleteItem(userCart, item.name)
    }
    return userCart
}


async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)
    if (index !== -1) {
        userCart.splice(index, 1)
    }
}


async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    return result.toFixed(2)
}


async function displayCart(userCart) {
    console.log("Cart Display: ")
    let subtotal = 0
    userCart.forEach((item, index) => {
        console.log(`${index + 1} . ${item.name} | ${item.price} | ${item.quantity} | ${item.subtotal()}`)
        subtotal += item.subtotal()
    })
    console.log("Subtotal: ", await calculateTotal(userCart))
}

export {
    addItem,
    deleteItem,
    handleQuantity,
    calculateTotal,
    displayCart
}