// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    console.log(this.count)
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onApplyBrake = () => {
    console.log(this.state)
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img-size"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />

        <div className="container">
          <h2 className="heading">Speed is {count}mph</h2>
          <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>

          <div>
            <button
              type="button"
              className="button1"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button2"
              onClick={this.onApplyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
