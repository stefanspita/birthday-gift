import React from "react"
import PropTypes from "prop-types"
import styles from "./budget-bar.css"

export function BudgetBar({peopleOverload, energy, money, love}) {
  return (
    <div className={styles.wrapper}>
      <span>Crowd tolerance: {peopleOverload} Energy: {energy} Money: &pound;{money}</span>
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
