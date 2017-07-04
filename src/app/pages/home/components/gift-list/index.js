import React from "react"
import PropTypes from "prop-types"

export function GiftList({giftCategories}) {
  console.log(giftCategories)
  return (
    <div>
      Plums
    </div>
  )
}

GiftList.propTypes = {
  giftCategories: PropTypes.array.isRequired,
}
