import React from "react"
import PropTypes from "prop-types"
import styles from "./item.css"

// export function CartItem({name, cost}) {
export function CartItem({cost}) {
  // <label>{name}</label>
  return (
    <div className={styles.item}>
      <label>Label</label>
      <div>
        Crowd tolerance cost: {cost.peopleOverload}&nbsp;
        Energy cost: {cost.energy}&nbsp;
        Money: &pound;{cost.money}
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.object.isRequired,
}
