import React from "react"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./love-exchange.css"

export function LoveExchange({peopleOverload, energy, money, sellCurrency, buyCurrency}) {
  return (
    <div
      className={styles.exchangeModal}
    >
      <Currencies
        peopleOverload={peopleOverload}
        energy={energy}
        money={money}
      />
      <div className={styles.currencyExchangeWrapper}>
        <div className={styles.buttonGroupWrapper}>
          <button className={styles.positive} onClick={() => buyCurrency("peopleOverload")}>+</button>
          <button className={styles.negative} onClick={() => sellCurrency("peopleOverload")}>-</button>
        </div>
        <div className={styles.buttonGroupWrapper}>
          <button className={styles.positive} onClick={() => buyCurrency("energy")}>+</button>
          <button className={styles.negative} onClick={() => sellCurrency("energy")}>-</button>
        </div>
        <div className={styles.buttonGroupWrapper}>
          <button className={styles.positive} onClick={() => buyCurrency("money")}>+</button>
          <button className={styles.negative} onClick={() => sellCurrency("money")}>-</button>
        </div>
      </div>
    </div>)
}

LoveExchange.propTypes = {
  peopleOverload: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
  sellCurrency: PropTypes.func.isRequired,
  buyCurrency: PropTypes.func.isRequired,
}
