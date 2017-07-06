import reducer from "./reducer"
import { connect } from "react-redux"
import actions from "./actions"
import Home from "./components/home"

const selector = (state) => {
  return {
    buttonClicked: state.home.buttonClicked,
    budget: state.home.budget,
    love: state.home.love,
    giftCategories: state.home.availableGifts,
  }
}

const BirthdayGiftApp = connect(selector, actions)(Home)

export default BirthdayGiftApp

export const reducers = {
  home: reducer,
}
