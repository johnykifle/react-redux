import React from 'react';

class Row extends React.Component{
    render(){
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}

Row.propTypes = {
    children: React.PropTypes.array.isRequired    
};

export default Row;