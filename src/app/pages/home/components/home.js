import React from "react"
import PropTypes from "prop-types"
import {BudgetBar} from "./budget-bar"
import {GiftList} from "./gift-list"

const Home = (props) => {
  const {budget, love, giftCategories, addToCart} = props
  return (
    <div>
      <BudgetBar
        peopleOverload={budget.peopleOverload}
        energy={budget.energy}
        money={budget.money}
        love={love}
      />
      <GiftList
        giftCategories = {giftCategories}
        addToCart={addToCart}
      />
    </div>
  )
}

Home.propTypes = {
  budget: PropTypes.object.isRequired,
  love: PropTypes.number.isRequired,
  giftCategories: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default Home
