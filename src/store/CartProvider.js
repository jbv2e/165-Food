import { useReducer } from 'react'
import CartConext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  if (action.type === 'REMOVE') {
    return defaultCartState
  }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

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