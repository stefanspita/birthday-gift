import React from "react"
import PropTypes from "prop-types"

export function GiftCategory({category, gifts}) {
  console.log(gifts)
  return (
    <div>
      <label>{category}</label>
    </div>
  )
}

GiftCategory.propTypes = {
  category: PropTypes.string.isRequired,
  gifts: PropTypes.array.isRequired,
}
