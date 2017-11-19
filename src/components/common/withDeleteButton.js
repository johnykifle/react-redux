import React from 'react';

const  WithDeleteButton = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { type : 'delete'};
    }
    render () {
      return (
        <div>
          <Component {...this.props} type= {this.state}/>
        </div>
      );
    }
  };
};

export default WithDeleteButton;
