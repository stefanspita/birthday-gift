import React from "react"
import PropTypes from "prop-types"
import {BudgetBar} from "../../../components"

const Home = ({budget}) => {
  return (
    <BudgetBar
      peopleOverload={budget.peopleOverload}
      energy={budget.energy}
      money={budget.money}
    />
  )
}

Home.propTypes = {
  budget: PropTypes.object.isRequired,
}

export default Home