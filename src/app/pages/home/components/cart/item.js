import React from "react"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./item.css"

export function CartItem({name, cost}) {
  return (
    <div className={styles.item}>
      <div className={styles.removeIcon}>
        <i className="fa fa-minus-circle"></i>
      </div>
      <div>
        <label>{name}</label>
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
  name: PropTypes.string.isRequired,
  cost: PropTypes.object.isRequired,
}
