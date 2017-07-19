import React from "react"
import PropTypes from "prop-types"
import R from "ramda"
import styles from "./category.css"
import {Gift} from "./gift"

const renderGift = R.curry((addToCart, props) => {
  return (<Gift
    key={props.id}
    addToCart={addToCart}
    {...props}
  />)
})

export function GiftCategory({category, gifts, addToCart}) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.categoryLabel}>{category}</label>
      <div className={styles.giftsRow}>
        {R.map(renderGift(addToCart), gifts)}
      </div>
    </div>
  )
}

GiftCategory.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  gifts: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}
renderGift.propTypes = {
  id: PropTypes.number.isRequired,
}
