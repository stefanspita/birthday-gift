import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import {GiftCategory} from "./category"

const renderGiftCategory = R.curry((addToCart, props) => {
  return (<GiftCategory
    key={props.id}
    addToCart={addToCart}
    {...props}
  />)
})

export function GiftList({giftCategories, addToCart}) {
  return (
    <div>
      {R.map(renderGiftCategory(addToCart), giftCategories)}
    </div>
  )
}

GiftList.propTypes = {
  giftCategories: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

renderGiftCategory.propTypes = {
  id: PropTypes.number.isRequired,
}
