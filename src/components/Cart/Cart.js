import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const items = []

const Cart = (props) => {
  const cartItem = (
    <ul className={classes['cart-items']}>
      {items.map((item, idx) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
