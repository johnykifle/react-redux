import React from 'react';
import classNames from 'classnames';

const makeDeleteButton = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      let classes = classNames({
        'btn btn-danger' : true
      });
      return <WrappedComponent {...this.props} myClasses = {classes} />;
    }
  };
};

export default makeDeleteButton;
