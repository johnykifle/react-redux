import { bindActionCreators } from 'redux';
import React from 'react';
import {connect} from  'react-redux';
import AuthorRow from  './authorRow';
import * as AuthorActions from '../../actions/authorActions';

class AuthorList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            authors: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event){
        const authorId = event.target.name;
        const authors = Object.assign([], this.props.authors);
        const author = getAuthorById(authors, authorId);
        this.props.actions.updateAuthor(author);
        //this.props.actions AuthorActions.updateAuthor(author));
    }

    handleChange(event){
        const field = event.target.name;
        const authors = Object.assign([], this.props.authors);
        const authorName = field.split('+');
        const authorId = authorName[1];
        const exisitingAuthor = getAuthorById(authors, authorId);
        exisitingAuthor[authorName[0]] =  event.target.value;
        const newAuthors = Object.assign([],  ...authors.filter(author => author.id != authorId), Object.assign({}, exisitingAuthor));
        this.setState({authors: newAuthors});
    }

    render(){
        return(
            <table className="table">
            <thead>
                <tr>
                    <td>id</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                </tr>
                </thead>
                <tbody>
                    {this.props.authors.map(author => 
                        <AuthorRow 
                            key= {author.id} 
                            author = {author} 
                            onChange={this.handleChange}
                            onClick={this.handleClick}/>
                    )}
                </tbody>
        </table>
        );
    }
}

AuthorList.propTypes = {
    authors: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

function getAuthorById(authors, id){
    const filteredAuthors = authors.filter(author => author.id == id);
    if(filteredAuthors.length > 0) return filteredAuthors[0];
    return null;
}


function mapStateToProps(state, ownProps){
    return {
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(AuthorActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);