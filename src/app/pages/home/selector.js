import R from "ramda"
import initialBudget from "../../../data/initial-budget"

const attachGiftsToCategories = R.curry((availableGifts, accumulator, category) => {
  const giftsInCategory = R.filter(R.propEq("categoryId", category.id), availableGifts)
  if (giftsInCategory.length > 0) {
    return R.append(R.assoc("gifts", giftsInCategory, category), accumulator)
  }
  return accumulator
})

const sumForCurrency = R.curry((cartItems, res, currency) => {
  return R.compose(R.assoc(currency, R.__, res), R.sum, R.map(R.pathOr(0, ["cost", currency])))(cartItems)
})

function selector(state) {
  return {
    budget: state.home.budget,
    love: state.home.love,
    cart: state.home.cart,
    cartTotal: R.reduce(sumForCurrency(state.home.cart), {}, R.keys(initialBudget)),
    availableCategories: R.reduce(attachGiftsToCategories(state.home.availableGifts), [], state.home.categories),
  }
}

export default selector
