import React from "react"
import PropTypes from "prop-types"
import R from "ramda"
import styles from "./category.css"
import {Gift} from "./gift"

const renderGift = R.curry((addGiftToCart, props) => {
  return (<Gift
    key={props.id}
    addGiftToCart={addGiftToCart}
    {...props}
  />)
})

// export function GiftCategory({category, gifts}) {
export function GiftCategory({id, gifts, addToCart}) {
  const addGiftToCart = R.partial(addToCart, [id])
  // <label>{category}</label>
  return (
    <div className={styles.wrapper}>
      <label className={styles.categoryLabel}>Category</label>
      <div className={styles.giftsRow}>
        {R.map(renderGift(addGiftToCart), gifts)}
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
