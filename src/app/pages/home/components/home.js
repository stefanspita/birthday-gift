import React from "react"
import PropTypes from "prop-types"
import {BudgetBar} from "./budget-bar"
import {GiftList} from "./gift-list"
import {Cart} from "./cart"
import styles from "./home.css"

function getCartComponent(removeFromCart, cart, cartTotal, love) {
  if (cart.length === 0) return null
  return (<div className={styles.cart}>
    <Cart
      cart={cart}
      cartTotal={cartTotal}
      removeFromCart={removeFromCart}
      love={love}
    />
  </div>)
}

const Home = ({budget, cart, cartTotal, love, availableCategories, tryToAddToCart,
  removeFromCart, sellCurrency, buyCurrency}) => {
  return (
    <div className={styles.appLayout}>
      <div>
        <BudgetBar
          peopleOverload={budget.peopleOverload}
          energy={budget.energy}
          money={budget.money}
          love={love}
          sellCurrency={sellCurrency}
          buyCurrency={buyCurrency}
        />
      </div>
      <div className={styles.bodyLayout}>
        <div className={styles.content}>
          <GiftList
            availableCategories = {availableCategories}
            addToCart={tryToAddToCart}
          />
        </div>
        {getCartComponent(removeFromCart, cart, cartTotal, love)}
      </div>
    </div>
  )
}

Home.propTypes = {
  budget: PropTypes.object.isRequired,
  love: PropTypes.number.isRequired,
  availableCategories: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  cartTotal: PropTypes.object.isRequired,
  tryToAddToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  sellCurrency: PropTypes.func.isRequired,
  buyCurrency: PropTypes.func.isRequired,
}

export default Home
