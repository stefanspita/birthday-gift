import React from "react"
import PropTypes from "prop-types"
import {BudgetBar} from "./budget-bar"
import {GiftList} from "./gift-list"

const Home = ({budget, love, giftCategories}) => {
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
      />
    </div>
  )
}

Home.propTypes = {
  budget: PropTypes.object.isRequired,
  love: PropTypes.number.isRequired,
  giftCategories: PropTypes.array.isRequired,
}

export default Home
