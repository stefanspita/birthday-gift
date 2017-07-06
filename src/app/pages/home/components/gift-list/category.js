import React from "react"
import PropTypes from "prop-types"
import R from "ramda"
import styles from "./category.css"
import {Gift} from "./gift"

function renderGift(props) {
  return (<Gift
    key={props.id}
    {...props}
  />)
}

// export function GiftCategory({category, gifts}) {
export function GiftCategory({gifts}) {
  // <label>{category}</label>
  return (
    <div className={styles.wrapper}>
      <label className={styles.categoryLabel}>Category</label>
      <div className={styles.giftsRow}>
        {R.map(renderGift, gifts)}
      </div>
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
