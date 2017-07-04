import R from "ramda"
import initialBudget from "../../../data/initial-budget"
import initialLove from "../../../data/initial-love"
import consts from "../../../constants"

const initialState = {
  buttonClicked: false,
  budget: initialBudget,
  love: initialLove,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case consts.CLICK_BUTTON:
    return R.merge(
      state,
      {buttonClicked: true}
    )
  default:
    return state
  }
}
