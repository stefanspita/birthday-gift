import React from "react"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"
import {Currencies} from "../../../../components"
import {LoveExchange} from "./love-exchange"
import styles from "./budget-bar.css"

export class BudgetBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showLoveExchange: false}
    this.toggleExchanceView = this.toggleExchanceView.bind(this)
  }

  toggleExchanceView(showLoveExchange) {
    if (showLoveExchange) return this.setState({showLoveExchange: false})
    return this.setState({showLoveExchange: true})
  }

  render() {
    const {peopleOverload, energy, money, love} = this.props
    let loveClass = styles.love
    if (this.state.showLoveExchange) loveClass += ` ${styles.loveActive}`

    return (
      <div className={styles.wrapper}>
        <Currencies
          peopleOverload={peopleOverload}
          energy={energy}
          money={money}
        />
        <ReactTooltip />
        <span
          className={loveClass}
          onClick={() => this.toggleExchanceView(this.state.showLoveExchange)}
          data-tip="Earned love. Click to exchange me for currency!!!">
          <i className={`fa fa-heart ${styles.heart}`} /> {love}
        </span>
        {this.state.showLoveExchange ?
          <LoveExchange
            peopleOverload={peopleOverload}
            energy={energy}
            money={money}
            sellCurrency={this.props.sellCurrency}
            buyCurrency={this.props.buyCurrency}
          /> : null
        }
      </div>
    )
  }
}

BudgetBar.propTypes = {
  peopleOverload: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
  love: PropTypes.number.isRequired,
  sellCurrency: PropTypes.func.isRequired,
  buyCurrency: PropTypes.func.isRequired,
}
