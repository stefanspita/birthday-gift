import consts from "../../../constants"

function addGiftToCart(categoryId, giftId) {
  return {
    type: consts.ADD_GIFT_TO_CART,
    payload: {categoryId, giftId},
  }
}

export default function actions(dispatch) {
  return {
    addToCart: (categoryId, giftId) => {
      dispatch(addGiftToCart(categoryId, giftId))
    },
  }
}
