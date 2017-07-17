import React from "react"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./item.css"

// export function CartItem({name, cost}) {
export function CartItem({cost}) {
  // <label>{name}</label>
  return (
    <div className={styles.item}>
      <label>Label</label>
      <div>
        <Currencies
          peopleOverload={cost.peopleOverload}
          energy={cost.energy}
          money={cost.money}
        />
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.object.isRequired,
}
