import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import {CartItem} from "./item"
import styles from "./cart.css"

const renderCartItem = R.curry((removeFromCart, props) => {
  return (<CartItem
    key={props.id}
    removeFromCart={removeFromCart}
    {...props}
  />)
})

export function Cart({cart, cartTotal, removeFromCart}) {
  if (cart.length === 0) return null
  return (
    <div>
      <h2>Shopping cart</h2>
      <div className={styles.cart}>
        <div>{R.map(renderCartItem(removeFromCart), cart)}</div>
        <div>
          <h4>Total</h4>
          <Currencies
            peopleOverload={cartTotal.peopleOverload}
            energy={cartTotal.energy}
            money={cartTotal.money}
          />
        </div>
        <a href="#" className={styles.button}>Redeem your gifts</a>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  cartTotal: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

renderCartItem.propTypes = {
  id: PropTypes.number.isRequired,
}
