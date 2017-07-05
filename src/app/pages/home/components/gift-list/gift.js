import React from "react"
import PropTypes from "prop-types"

export function Gift({label, cost}) {
  return (
    <div>
      <label>{label}</label>
      <div>
        Crowd tolerance cost: {cost.peopleOverload}&nbsp;
        Energy cost: {cost.energy}&nbsp;
        Money: &pound;{cost.money}
      </div>
    </div>
  )
}

Gift.propTypes = {
  label: PropTypes.string.isRequired,
  cost: PropTypes.object.isRequired,
}
