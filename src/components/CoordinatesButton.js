import React from 'react';

class CoordinatesButton extends React.Component {

  coordinates = (e) => {
    const xy = [e.clientX, e.clientY];
    return this.props.onReceiveCoordinates(xy);
  }

  render() {
    return (
      <button onClick={this.coordinates}>Coordinates</button>
    )
  }
}

export default CoordinatesButton;