import React from "react"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./gift.css"
import giftPictureSrc from "./assets/gift-outline-md.png"

export function Gift({id, cost, addToCart, outOfBudget}) {
  let giftClass = styles.wrapper
  if (outOfBudget) giftClass = styles.disabledWrapper
  return (
    <div
      className={giftClass}
      onClick={() => addToCart(id)}
    >
      <div>
        <img className={styles.giftImage} src={giftPictureSrc}></img>
      </div>
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
  cost: PropTypes.object.isRequired,
  outOfBudget: PropTypes.bool,
  addToCart: PropTypes.func.isRequired,
}
