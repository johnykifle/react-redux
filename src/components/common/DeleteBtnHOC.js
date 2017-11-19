import React,  {PropTypes} from 'react';
import classNames from 'classnames';

const newData = classNames({
  'btn btn-danger' : true
});

const DeleteBtnHOC = ComposedComponent => class extends React.Component {
    constructor(props){
      super(props);
      this.state = ({
        classes: null
      });
    }
     componentDidMount() {
        this.setState({
          classes: newData
        });
     }

     render() {
        return <ComposedComponent {...this.props} {...this.state} />;
     }
  };

  export default DeleteBtnHOC;
