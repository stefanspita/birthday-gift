import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import {CartItem} from "./item"

function renderCartItem(props) {
  return (<CartItem
    key={props.id}
    {...props}
  />)
}

export function Cart({cart}) {
  if (cart.length === 0) return null
  return (
    <div>
      <h2>Shopping cart</h2>
      {R.map(renderCartItem, cart)}
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
}

renderCartItem.propTypes = {
  id: PropTypes.number.isRequired,
}
