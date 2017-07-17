import React from "react"
import PropTypes from "prop-types"

// export function CartItem({name, cost}) {
export function Currencies({peopleOverload, energy, money}) {
  return (<span>Crowd tolerance: {peopleOverload} Energy: {energy} Money: &pound;{money}</span>)
}

Currencies.propTypes = {
  peopleOverload: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
}
