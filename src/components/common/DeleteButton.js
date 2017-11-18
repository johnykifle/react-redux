import React, {PropTypes} from 'react';
import Button from './Button';

class DeleteButton extends React.Component {
  render(){
    return (
      <Button
        onClick = {this.props.onClick}
        text = {this.props.text}
        type = "delete"
        />
    );
  }
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

DeleteButton.defaultProps = {
  text: 'Click me',
  type: 'delete'
};

export default DeleteButton;
