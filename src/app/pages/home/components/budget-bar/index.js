import React from "react"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./budget-bar.css"

export function BudgetBar({peopleOverload, energy, money, love}) {
  return (
    <div className={styles.wrapper}>
      <Currencies
        peopleOverload={peopleOverload}
        energy={energy}
        money={money}
      />
      <span> My love: {love}</span>
    </div>
  )
}

BudgetBar.propTypes = {
  peopleOverload: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
  love: PropTypes.number.isRequired,
}
