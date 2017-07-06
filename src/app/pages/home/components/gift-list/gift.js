import React from "react"
import PropTypes from "prop-types"
import styles from "./gift.css"

// export function Gift({name, cost}) {
export function Gift({id, cost, addGiftToCart}) {
  // <label>{name}</label>
  return (
    <div
      className={styles.wrapper}
      onClick={() => addGiftToCart(id)}
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
  addGiftToCart: PropTypes.func.isRequired,
}
