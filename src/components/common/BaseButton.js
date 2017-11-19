import React, {PropTypes } from 'react';

class BaseButton extends React.Component {
  render() {
    return (
      <button
          className = {this.props.myClasses}
          type="button"
          value="test"
          >
          {this.props.text}
      </button>
    );
  }
}

BaseButton.propTypes = {
  myClasses: PropTypes.func,
  text: PropTypes.string
};

BaseButton.defaultProps = {
  text: 'button'
};

export default BaseButton;
