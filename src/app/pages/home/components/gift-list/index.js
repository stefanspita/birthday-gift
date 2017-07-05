import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import {GiftCategory} from "./category"

function renderGiftCategory(props, index) {
  return (<GiftCategory
    key={index}
    {...props}
  />)
}

export function GiftList({giftCategories}) {
  return (
    <div>
      {R.addIndex(R.map)(renderGiftCategory, giftCategories)}
    </div>
  )
}

GiftList.propTypes = {
  giftCategories: PropTypes.array.isRequired,
}

renderGiftCategory.propTypes = {
  category: PropTypes.array.isRequired,
  gifts: PropTypes.array.isRequired,
}
