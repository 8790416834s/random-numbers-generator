import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {text: 0}

  onChangeNumber = () => {
    this.setState({text: Math.ceil(Math.random())})
  }

  render() {
    const {text} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="generate-button"
              onClick={this.onChangeNumber}
            >
              Generate
            </button>
          </div>
          <p className="text">{text}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
