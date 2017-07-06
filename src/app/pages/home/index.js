import R from "ramda"
import reducer from "./reducer"
import { connect } from "react-redux"
import actions from "./actions"
import Home from "./components/home"

const attachGiftsToCategories = R.curry((availableGifts, accumulator, category) => {
  const giftsInCategory = R.filter(R.propEq("categoryId", category.id), availableGifts)
  if (giftsInCategory.length > 0) {
    return R.append(R.assoc("gifts", giftsInCategory, category), accumulator)
  }
  return accumulator
})

const selector = (state) => {
  return {
    buttonClicked: state.home.buttonClicked,
    budget: state.home.budget,
    love: state.home.love,
    cart: state.home.cart,
    availableCategories: R.reduce(attachGiftsToCategories(state.home.availableGifts), [], state.home.categories),
  }
}

const BirthdayGiftApp = connect(selector, actions)(Home)

export default BirthdayGiftApp

export const reducers = {
  home: reducer,
}
