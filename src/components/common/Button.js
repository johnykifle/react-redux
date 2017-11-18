import React,  {PropTypes} from 'react';
import classNames from 'classnames';

class Button extends React.Component{
  render(){
    let classes = classNames({
      'btn btn-danger' : this.props.type === 'delete',
      'btn btn-primary' : this.props.type === 'primary'
    });
    return (
      <button
        className= {classes}
        type="button"
        onClick= {this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  text: 'Click me',
  onClick: () => {},
  type: 'primary'
};

export default Button;
