import React from "react"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"
import styles from "./currencies.css"

// export function CartItem({name, cost}) {
export function Currencies({peopleOverload, energy, money}) {
  return (<div className={styles.currencyWrapper}>
    <ReactTooltip />
    <span data-tip="Crowds!!!"><i className={`fa fa-users ${styles.peopleOverload}`} /> {peopleOverload}</span>
    <span data-tip="Vitality"><i className={`fa fa-bolt ${styles.energy}`} /> {energy}</span>
    <span data-tip="Simoleans"><i className={`fa fa-money ${styles.money}`} /> {money}</span>
  </div>)
}

Currencies.propTypes = {
  peopleOverload: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
}
