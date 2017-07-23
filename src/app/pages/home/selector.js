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

const attachCategoryToGifts = R.curry((categories, gift) => {
  const category = R.find(R.propEq("id", gift.categoryId))(categories)
  return R.assoc("categoryName", category.category, gift)
})

function selector(state) {
  return {
    budget: state.home.budget,
    love: state.home.love,
    cart: R.map(attachCategoryToGifts(state.home.categories), state.home.cart),
    cartTotal: R.reduce(sumForCurrency(state.home.cart), {}, R.keys(initialBudget)),
    availableCategories: R.reduce(attachGiftsToCategories(state.home.availableGifts), [], state.home.categories),
    loveExchangeView: state.home.loveExchangeView,
  }
}

export default selector
