// Write your code here
import {Component} from 'react'

import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, totalImage: headImage}

  onClickButton = () => {
    const {heads, tails} = this.state
    const numberResult = Math.floor(Math.random() * 2)
    let resImage = ''
    let newHead = heads
    let newTail = tails

    if (numberResult === 0) {
      newHead += 1
      resImage = headImage
    } else {
      newTail += 1
      resImage = tailImage
    }
    this.state({
      heads: newHead,
      tails: newTail,
      totalImage: resImage,
    })
  }

  render() {
    const {heads, tails, totalImage} = this.state
    const totalCount = heads + tails
    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="toss-img" src={totalImage} alt="toss result" />

          <button className="button" type="button" onClick={this.onClickButton}>
            Tos Coin
          </button>
          <div className="total">
            <p className="total-score">Total: {totalCount}</p>
            <p className="heads-score">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
