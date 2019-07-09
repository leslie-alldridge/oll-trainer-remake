import React, { Component } from 'react';
import TimeElapsed from './timeElapsed';
import { Icon } from 'antd';
import { images } from '../images/images';
import { algs } from '../common/algs'

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState = {
      isRunning: false,
      timeElapsed: 0
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  toggle = () => {
    this.setState({ isRunning: !this.state.isRunning }, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer);
    });
  };

  reset = () => {
    clearInterval(this.timer);
    this.setState(this.initialState);
  };
  startTimer = () => {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  };
  update = () => {
    const delta = Date.now() - this.startTime;
    this.setState({ timeElapsed: this.state.timeElapsed + delta });
    this.startTime = Date.now();
  };

  handleKeyPress = event => {
    console.log(event);
    if (event.code === 'Space') {
      this.setState({ isRunning: !this.state.isRunning }, () => {
        this.state.isRunning ? this.startTimer() : clearInterval(this.timer);
      });
    }
    if (event.code === 'Escape') {
      clearInterval(this.timer);
      this.setState(this.initialState);
    }
  };
  render() {
    const { isRunning, timeElapsed } = this.state;
    return (
      <div className='clock-bg'>
        <div>
          <TimeElapsed id='timer' timeElapsed={timeElapsed} />
          <div className='stopwatch--button-div'>
            <button
              className='stopwatch--button'
              onClick={this.toggle}
              onKeyPress={e => this.handleKeyPress(e)}
            >
              {isRunning ? 'Stop' : 'Start'}
            </button>
            {!isRunning && (
              <button
                className='stopwatch--button'
                onClick={isRunning ? this.lap : this.reset}
                disabled={!isRunning && !timeElapsed}
              >
                Reset
              </button>
            )}
          </div>
          <p className='stopwatch--note'>
            <Icon className='stopwatch--note-icon' type='info-circle' />
            <i>Spacebar to start/stop and Escape to clear</i>
          </p>
          <div className='stopwatch--columns'>
            <div className='stopwatch--image'>
              <p>Currently solving: </p>
              <img alt='oll-algorithm' src={images.images[this.props.oll].image} />
            </div>
            <div className='stopwatch--image'>
              <p>Algorithms: </p>
              <ul className='stopwatch--ul'>
                {algs[this.props.oll].map(alg => <li>{alg.alg}</li>)}
              </ul>
            </div>
            <div className='stopwatch--image'>
              <p>Previous Times: </p>
              <ul>
                <li>
                  <strong className='stopwatch--best'>Best: 03:012</strong>
                </li>
                <li>1.200</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
