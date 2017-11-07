import React from 'react';

const ButtonInput = ({name, value, onClick }) => {
    return(
        <input 
        type="submit"
        name={name}
        value={value}
        onClick ={onClick}
        />
    );
};

ButtonInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default ButtonInput;
