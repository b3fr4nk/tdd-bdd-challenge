// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w * 2 + h * 2
}

const circleArea = r => {
  return r**2 * Math.PI
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  count = 0
  shoppingCart.forEach(item => {
    count += item.quantity
  });
  return count
}

const removeItemFromCart = (item) => {
  const index = shoppingCart.indexOf(item)
  delete shoppingCart[index]
}

const getCartTotal = () => {
  total = 0
  shoppingCart.forEach(item => {
    total += item.price * item.quantity
  })
  return total
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, getCartTotal
}
