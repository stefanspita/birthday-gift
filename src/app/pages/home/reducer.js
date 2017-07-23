import R from "ramda"
import initialBudget from "../../../data/initial-budget"
import initialLove from "../../../data/initial-love"
import {gifts as allAvailableGifts, categories} from "../../../data/initial-gifts"
import consts from "../../../constants"

function calculateBudgetAfterSale (currency, state, gift) {
  return R.useWith(R.subtract, [R.path(["budget", currency]), R.path(["cost", currency])])(state, gift)
}
function calculateBudgetAfterRemoval (currency, state, gift) {
  return R.useWith(R.add, [R.path(["budget", currency]), R.path(["cost", currency])])(state, gift)
}

const checkIfEnoughBudget = R.curry((budget, gift) => {
  const keys = R.keys(initialBudget)
  for(let i=0;i<keys.length;i++) {
    const key = keys[i]
    if (R.lt(budget[key], gift.cost[key])) return R.merge(gift, {outOfBudget: true})
  }
  return R.merge(gift, {outOfBudget: false})
})
const markGiftsAsOffBudget = (availableBudget) => R.map(checkIfEnoughBudget(availableBudget))

function updateGiftsStateAfterPurchase(availableBudget, availableGifts, giftId) {
  return R.compose(
    markGiftsAsOffBudget(availableBudget),
    R.reject(R.propEq("id", giftId))
  )(availableGifts)
}

function updateGiftsStateAfterRemoval(availableBudget, availableGifts, gift) {
  return R.compose(
    markGiftsAsOffBudget(availableBudget),
    R.append(gift)
  )(availableGifts)
}

const initialState = {
  budget: initialBudget,
  love: initialLove,
  availableGifts: markGiftsAsOffBudget(initialBudget)(allAvailableGifts),
  categories: categories,
  cart: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case consts.ADD_GIFT_TO_CART_SUCCESS: {
    const {giftId} = action.payload
    const gift = R.find(R.propEq("id", giftId), state.availableGifts)
    const newBudget = {
      peopleOverload: calculateBudgetAfterSale("peopleOverload", state, gift),
      energy: calculateBudgetAfterSale("energy", state, gift),
      money: calculateBudgetAfterSale("money", state, gift),
    }

    return R.merge(state, {
      cart: R.append(gift, state.cart),
      availableGifts: updateGiftsStateAfterPurchase(newBudget, state.availableGifts, giftId),
      love: state.love + gift.love,
      budget: newBudget,
    })
  }

  case consts.REMOVE_GIFT_FROM_CART_SUCCESS: {
    const {giftId} = action.payload
    const gift = R.find(R.propEq("id", giftId), allAvailableGifts)
    const newBudget = {
      peopleOverload: calculateBudgetAfterRemoval("peopleOverload", state, gift),
      energy: calculateBudgetAfterRemoval("energy", state, gift),
      money: calculateBudgetAfterRemoval("money", state, gift),
    }

    return R.merge(state, {
      cart: R.reject(R.propEq("id", giftId), state.cart),
      availableGifts: updateGiftsStateAfterRemoval(newBudget, state.availableGifts, gift),
      love: state.love - gift.love,
      budget: newBudget,
    })
  }

  case consts.SELL_CURRENCY: {
    const {currency} = action.payload
    const {budget} = state
    const newBudget = R.assoc(currency, budget[currency] - 1, budget)
    return R.merge(state, {
      budget: newBudget,
      love: state.love + 1,
    })
  }

  case consts.BUY_CURRENCY: {
    const {currency} = action.payload
    const {budget} = state
    const newBudget = R.assoc(currency, budget[currency] + 1, budget)
    return R.merge(state, {
      budget: newBudget,
      love: state.love - 1,
    })
  }

  default:
    return state
  }
}
