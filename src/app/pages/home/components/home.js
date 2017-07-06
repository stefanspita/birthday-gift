import React from "react"
import PropTypes from "prop-types"
import {BudgetBar} from "./budget-bar"
import {GiftList} from "./gift-list"

const Home = (props) => {
  const {budget, love, availableCategories, addToCart} = props
  return (
    <div>
      <BudgetBar
        peopleOverload={budget.peopleOverload}
        energy={budget.energy}
        money={budget.money}
        love={love}
      />
      <GiftList
        availableCategories = {availableCategories}
        addToCart={addToCart}
      />
    </div>
  )
}

Home.propTypes = {
  budget: PropTypes.object.isRequired,
  love: PropTypes.number.isRequired,
  availableCategories: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default Home
