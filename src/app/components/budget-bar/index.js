import React from "react"
import PropTypes from "prop-types"

export function BudgetBar({love, energy, money}) {
  return (
    <div>
      Love: {love} Energy: {energy} Money: &pound;{money}
    </div>
  )
}

BudgetBar.propTypes = {
  love: PropTypes.number,
  energy: PropTypes.number,
  money: PropTypes.number,
}

BudgetBar.defaultProps = {
  love: 0,
  energy: 0,
  money: 0,
}
