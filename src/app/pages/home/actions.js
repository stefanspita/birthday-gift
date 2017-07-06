import consts from "../../../constants"

function addGiftToCart(giftId) {
  return {
    type: consts.ADD_GIFT_TO_CART,
    payload: {giftId},
  }
}

export default function actions(dispatch) {
  return {
    addToCart: (giftId) => {
      dispatch(addGiftToCart(giftId))
    },
  }
}
