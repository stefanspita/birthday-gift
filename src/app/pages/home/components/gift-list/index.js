import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import {GiftCategory} from "./category"

function renderGiftCategory({category, gifts}, index) {
  return (<GiftCategory
    index={index}
    category={category}
    gifts={gifts}
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
