import CartConext from './cart-context'

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {}

  const removeItemFromCartHandler = (id) => {}

  const cartConext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return (
    <CartConext.Provider value={cartConext}>
      {props.children}
    </CartConext.Provider>
  )
}

export default CartProvider