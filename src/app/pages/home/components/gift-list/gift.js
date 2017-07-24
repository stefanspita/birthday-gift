import React from "react"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./gift.css"
import {getGiftPicture} from "./picture-chooser"

export function Gift({id, cost, imageName, addToCart, outOfBudget}) {
  let giftClass = styles.wrapper
  if (outOfBudget) giftClass += ` ${styles.disabledWrapper}`
  const giftPictureSrc = getGiftPicture(imageName)

  return (
    <div
      className={giftClass}
      onClick={() => addToCart(id)}
    >
      <div className={styles.giftWrapper}>
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
  imageName: PropTypes.string.isRequired,
  outOfBudget: PropTypes.bool,
  addToCart: PropTypes.func.isRequired,
}
