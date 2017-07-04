import React from "react"
import PropTypes from "prop-types"

export function BudgetBar({peopleOverload, energy, money}) {
  return (
    <div>
      Crowds hatred: {peopleOverload} Energy: {energy} Money: &pound;{money}
    </div>
  )
}

BudgetBar.propTypes = {
  peopleOverload: PropTypes.number,
  energy: PropTypes.number,
  money: PropTypes.number,
}

BudgetBar.defaultProps = {
  peopleOverload: 0,
  energy: 0,
  money: 0,
}
