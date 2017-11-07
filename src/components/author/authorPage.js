import React from 'react';
import {connect} from 'react-redux';
import * as AuthorActions from '../../actions/authorActions';
import AuthorList from './authorList';
 
class AuthorPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authors: Object.assign([], props.authors)
        };
        
    }

    render(){
        const { authors } = this.props;
        return(
            <AuthorList 
                authors = {authors} 
            />
        );
    }
}

AuthorPage.propTypes = {
    authors: React.PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps){
    return {
        authors: state.authors
    };
}

export default connect(mapStateToProps)(AuthorPage);