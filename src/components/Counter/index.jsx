import React from 'react'
import './Counter.css'

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            isIncrease: true
        };
    }

    increase = () => {
      const N = this.props.step;

      this.setState((state) => ({
        ...state,
        count: state.count + N,
      }))        
    }

    discrease = () => {
      const N = this.props.step;
      this.setState((state) => ({
        ...state,
        count: state.count - N,
      }))
    }

    changeMode = () => {
      this.setState((state) => ({
        ...state,
        isIncrease: !state.isIncrease,
      }))
    }

    autoClick = (num) => {
      let timerId = setInterval(() => {
        const N = this.props.step;

        this.setState((state) => ({
          ...state,
          count: this.state.isIncrease ? this.state.count +N : this.state.count -N,
        }))
      }, 1000)

      setTimeout(() => {
        clearInterval(timerId)
      }, 5000)
    }
  
  render() {
    const { count, isIncrease } = this.state;

    return (
      <div>
          <div>{count}</div>
          <div>step = {this.props.step}</div>
          <button 
            className={'counterBtn '+ (isIncrease ? 'btnAdd': 'btnSubtract')} 
            onClick={isIncrease ? this.increase : this.discrease}
          >{isIncrease ? 'Add' : 'Subtract'}</button>
          <button className='counterBtn' onClick={this.changeMode}>Change Mode</button>
          <button onClick={this.autoClick}>autoClick</button>
      </div>
    )
  }
}

export default Counter;
