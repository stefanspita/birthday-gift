import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import {GiftCategory} from "./category"

function renderGiftCategory(props) {
  return (<GiftCategory
    key={props.id}
    {...props}
  />)
}

export function GiftList({giftCategories}) {
  return (
    <div>
      {R.map(renderGiftCategory, giftCategories)}
    </div>
  )
}

GiftList.propTypes = {
  giftCategories: PropTypes.array.isRequired,
}

renderGiftCategory.propTypes = {
  id: PropTypes.number.isRequired,
}
