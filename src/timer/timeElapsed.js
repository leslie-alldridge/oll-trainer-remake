import React from 'react';

class TimeElapsed extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2)
    };
  }
  render() {
    const leftPad = (width, n) => {
      if ((n + '').length > width) {
        return n;
      }
      const padding = new Array(width).join('0');
      return (padding + n).slice(-width);
    };
    const units = this.getUnits();
    return (
      <div className='clock' id={this.props.id}>
        <span>{leftPad(2, units.min)}:</span>
        <span>{leftPad(2, units.sec)}.</span>
        <span>{units.msec}</span>
      </div>
    );
  }
}

export default TimeElapsed;
