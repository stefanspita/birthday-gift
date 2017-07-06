import R from "ramda"
import initialBudget from "../../../data/initial-budget"
import initialLove from "../../../data/initial-love"
import initialGifts from "../../../data/initial-gifts"
import consts from "../../../constants"

const initialState = {
  budget: initialBudget,
  love: initialLove,
  availableGifts: initialGifts,
  cart: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case consts.ADD_GIFT_TO_CART: {
    const {categoryId, giftId} = action.payload
    const category = R.find(R.propEq("id", categoryId), state.availableGifts)
    const gift = R.find(R.propEq("id", giftId), category.gifts)
    return R.merge(state, {
      cart: R.append(gift, state.cart),
    })
  }
  default:
    return state
  }
}
