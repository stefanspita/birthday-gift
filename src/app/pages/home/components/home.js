import React from "react"
import PropTypes from "prop-types"
import {BudgetBar} from "../../../components"

const Home = ({budget, love}) => {
  return (
    <BudgetBar
      peopleOverload={budget.peopleOverload}
      energy={budget.energy}
      money={budget.money}
      love={love}
    />
  )
}

Home.propTypes = {
  budget: PropTypes.object.isRequired,
  love: PropTypes.number.isRequired,
}

export default Home
