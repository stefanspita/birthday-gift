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

function sellCurrency(dispatch, currency) {
  return dispatch({
    type: consts.SELL_CURRENCY,
    payload: {currency},
  })
}

function buyCurrency(dispatch, currency) {
  return dispatch({
    type: consts.BUY_CURRENCY,
    payload: {currency},
  })
}

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

  sellCurrency: (currency) => {
    return function (dispatch, getState) {
      const remainingCurrency = getState().home.budget[currency]
      if (remainingCurrency > 0) return sellCurrency(dispatch, currency)
    }
  },

  buyCurrency: (currency) => {
    return function (dispatch, getState) {
      const remainingLove = getState().home.love
      if (remainingLove > 0) return buyCurrency(dispatch, currency)
    }
  },
}
