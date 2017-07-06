import R from "ramda"
import initialBudget from "../../../data/initial-budget"
import initialLove from "../../../data/initial-love"
import {gifts as allAvailableGifts, categories} from "../../../data/initial-gifts"
import consts from "../../../constants"

const initialState = {
  budget: initialBudget,
  love: initialLove,
  availableGifts: allAvailableGifts,
  categories: categories,
  cart: [],
}

function calculateBudgetAfterSale (currency, state, gift) {
  return R.useWith(R.subtract, [R.path(["budget", currency]), R.path(["cost", currency])])(state, gift)
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case consts.ADD_GIFT_TO_CART: {
    const {giftId} = action.payload
    const gift = R.find(R.propEq("id", giftId), state.availableGifts)
    return R.merge(state, {
      cart: R.append(gift, state.cart),
      availableGifts: R.reject(R.propEq("id", giftId), state.availableGifts),
      love: state.love + gift.love,
      budget: {
        peopleOverload: calculateBudgetAfterSale("peopleOverload", state, gift),
        energy: calculateBudgetAfterSale("energy", state, gift),
        money: calculateBudgetAfterSale("money", state, gift),
      },
    })
  }
  default:
    return state
  }
}
