import React from "react"
import PropTypes from "prop-types"
import styles from "./gift.css"

// export function Gift({name, cost}) {
export function Gift({cost}) {
  // <label>{name}</label>
  return (
    <div className={styles.wrapper}>
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
  name: PropTypes.string.isRequired,
  cost: PropTypes.object.isRequired,
}
