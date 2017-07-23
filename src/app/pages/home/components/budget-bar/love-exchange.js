import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import {Currencies} from "../../../../components"
import styles from "./love-exchange.css"

const MOUSE_HOLD_INTERVAL_TIMEOUT = 80
let interval

function onMouseDown(fn, currency) {
  interval = setInterval(() => fn(currency), MOUSE_HOLD_INTERVAL_TIMEOUT)
}

function onMouseUp() {
  clearInterval(interval)
}

const renderButtonSet = R.curry((style, buyCurrency, sellCurrency, currency) => {
  return (<div className={style}>
    <button
      className={styles.positive}
      onClick={(() => buyCurrency(currency))}
      onMouseDown={() => onMouseDown(buyCurrency, currency)}
      onMouseUp={() => onMouseUp()}
    >+</button>
    <button
      className={styles.negative}
      onClick={(() => sellCurrency(currency))}
      onMouseDown={() => onMouseDown(sellCurrency, currency)}
      onMouseUp={() => onMouseUp()}
    >-</button>
  </div>)
})

export function LoveExchange({peopleOverload, energy, money, sellCurrency, buyCurrency}) {
  const renderButtons = renderButtonSet(styles.buttonGroupWrapper, buyCurrency, sellCurrency)
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
        {renderButtons("peopleOverload")}
        {renderButtons("energy")}
        {renderButtons("money")}
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
