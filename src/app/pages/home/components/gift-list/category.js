import React from "react"
import PropTypes from "prop-types"
import R from "ramda"
import {Gift} from "./gift"

function renderGift(props) {
  return (<Gift
    key={props.id}
    {...props}
  />)
}

export function GiftCategory({category, gifts}) {
  return (
    <div>
      <label>{category}</label>
      {R.map(renderGift, gifts)}
    </div>
  )
}

GiftCategory.propTypes = {
  category: PropTypes.string.isRequired,
  gifts: PropTypes.array.isRequired,
}
renderGift.propTypes = {
  id: PropTypes.number.isRequired,
}
