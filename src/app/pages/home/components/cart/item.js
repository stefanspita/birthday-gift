import React from "react"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./item.css"

export function CartItem({id, categoryName, cost, removeFromCart}) {
  return (
    <div className={styles.item}>
      <div
        className={styles.removeIcon}
        onClick={() => removeFromCart(id)}
      >
        <i className="fa fa-minus-circle"></i>
      </div>
      <div>
        <label>Secret gift related to {categoryName.toLowerCase()}</label>
        <div>
          <Currencies
            peopleOverload={cost.peopleOverload}
            energy={cost.energy}
            money={cost.money}
          />
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  cost: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}
