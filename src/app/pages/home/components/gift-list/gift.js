import React from "react"
import PropTypes from "prop-types"
import styles from "./gift.css"

// export function Gift({name, cost}) {
export function Gift({id, cost, addToCart, outOfBudget}) {
  // <label>{name}</label>
  let giftClass = styles.wrapper
  if (outOfBudget) giftClass = styles.disabledWrapper
  return (
    <div
      className={giftClass}
      onClick={() => addToCart(id)}
    >
      <label>Label</label>
      <div>
        Crowd tolerance cost: {cost.peopleOverload}&nbsp;
        Energy cost: {cost.energy}&nbsp;
        Money: &pound;{cost.money}
      </div>
    </div>
  )
}

Gift.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.object.isRequired,
  outOfBudget: PropTypes.bool,
  addToCart: PropTypes.func.isRequired,
}
