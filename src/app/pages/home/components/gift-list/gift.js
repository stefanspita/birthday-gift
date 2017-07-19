import React from "react"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./gift.css"

export function Gift({id, name, cost, addToCart, outOfBudget}) {
  let giftClass = styles.wrapper
  if (outOfBudget) giftClass = styles.disabledWrapper
  return (
    <div
      className={giftClass}
      onClick={() => addToCart(id)}
    >
      <label>{name}</label>
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

Gift.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.object.isRequired,
  outOfBudget: PropTypes.bool,
  addToCart: PropTypes.func.isRequired,
}
