import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import {CartItem} from "./item"
import styles from "./cart.css"

function renderCartItem(props) {
  return (<CartItem
    key={props.id}
    {...props}
  />)
}

export function Cart({cart, cartTotal}) {
  if (cart.length === 0) return null
  return (
    <div>
      <h2>Shopping cart</h2>
      <div className={styles.cart}>
        <div>{R.map(renderCartItem, cart)}</div>
        <div>
          <h4>Total</h4>
          <Currencies
            peopleOverload={cartTotal.peopleOverload}
            energy={cartTotal.energy}
            money={cartTotal.money}
          />
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  cartTotal: PropTypes.object.isRequired,
}

renderCartItem.propTypes = {
  id: PropTypes.number.isRequired,
}
