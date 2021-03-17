import React from 'react';

class DelayedButton extends React.Component {

  delayHelper = (e) => {
    e.persist()
    return setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  } 

  render() {
    return (
      <button onClick={this.delayHelper}>Delayed</button>
    )
  }
}

export default DelayedButton;