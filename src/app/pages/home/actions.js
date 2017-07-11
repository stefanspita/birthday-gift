import R from "ramda"
import consts from "../../../constants"
import initialBudget from "../../../data/initial-budget"

function addGiftToCart(dispatch, giftId) {
  return dispatch({
    type: consts.ADD_GIFT_TO_CART_SUCCESS,
    payload: {giftId},
  })
}

function failedAddingGiftToCart(dispatch, neededCurrencies) {
  return dispatch({
    type: consts.ADD_GIFT_TO_CART_FAILED,
    payload: neededCurrencies,
  })
}

const checkIfEnoughBudget = R.curry((budget, giftCost, acc, key) => {
  if (R.lt(budget[key], giftCost[key]))
    acc.push({currency: key, needed: giftCost[key] - budget[key]})
  return acc
})

export default {
  tryToAddToCart: (giftId) => {
    return function (dispatch, getState) {
      const state = getState().home
      const gift = R.find(R.propEq("id", giftId), state.availableGifts)
      const neededCurrencies = R.reduce(
        checkIfEnoughBudget(state.budget, gift.cost),
        [],
        R.keys(initialBudget)
      )

      if (neededCurrencies.length !== 0) return failedAddingGiftToCart(dispatch, neededCurrencies)
      return addGiftToCart(dispatch, giftId)
    }
  },
}
