import React from "react"
import PropTypes from "prop-types"
import {BudgetBar} from "./budget-bar"
import {GiftList} from "./gift-list"
import {Cart} from "./cart"
import styles from "./home.css"

const Home = ({budget, cart, cartTotal, love, availableCategories, tryToAddToCart}) => {
  return (
    <div>
      <BudgetBar
        peopleOverload={budget.peopleOverload}
        energy={budget.energy}
        money={budget.money}
        love={love}
      />
      <div className={styles.layout}>
        <GiftList
          availableCategories = {availableCategories}
          addToCart={tryToAddToCart}
        />
        <Cart
          cart={cart}
          cartTotal={cartTotal}
        />
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
}

export default Home
