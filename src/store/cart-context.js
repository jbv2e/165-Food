import React from 'react'

const CartConext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default CartConext
