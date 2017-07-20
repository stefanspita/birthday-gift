import R from "ramda"
import consts from "../../../constants"
import initialBudget from "../../../data/initial-budget"

function addGiftToCart(dispatch, giftId) {
  return dispatch({
    type: consts.ADD_GIFT_TO_CART_SUCCESS,
    payload: {giftId},
  })
}

function removeGiftFromCart(dispatch, giftId) {
  return dispatch({
    type: consts.REMOVE_GIFT_FROM_CART_SUCCESS,
    payload: {giftId},
  })
}

function failedAddingGiftToCart(dispatch) {
  return dispatch({
    type: consts.ADD_GIFT_TO_CART_FAILED,
  })
}

const checkIfEnoughBudget = R.curry((budget, giftCost, keys) => {
  for(let i=0;i<keys.length;i++) {
    const key = keys[i]
    if (R.lt(budget[key], giftCost[key])) return false
  }
  return true
})

export default {
  tryToAddToCart: (giftId) => {
    return function (dispatch, getState) {
      const state = getState().home
      const gift = R.find(R.propEq("id", giftId), state.availableGifts)
      const enoughBudget = checkIfEnoughBudget(state.budget, gift.cost, R.keys(initialBudget))

      if (enoughBudget) return addGiftToCart(dispatch, giftId)
      return failedAddingGiftToCart(dispatch)
    }
  },

  removeFromCart: (giftId) => {
    return function (dispatch) {
      return removeGiftFromCart(dispatch, giftId)
    }
  },
}
