import React from 'react';
import ButtonInput from '../common/ButtonInput';
import TextInput from '../common/TextInput';
const AuthorRow = ({author, onChange, onClick}) => {
    
    // const buttonClickHandler = (author) => {
    //     this.props.dispatch(AuthorActions.updateAuthor(author));
    // }

    return (
        <tr key = {author.id}>
            <td>
                {author.id}
            </td> 
            <td>
                <TextInput name={"firstName+" + author.id} label="" value = {author.firstName} onChange={onChange}/>
            </td> 
            <td>
                <TextInput name={"lastName+" + author.id} label="" value = {author.lastName} onChange={onChange}/>
            </td> 
            <td>
                <ButtonInput name={author.id} value = "Update" onClick= {onClick}/>
            </td>
        </tr>
    );
};

AuthorRow.propTypes = {
    author: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default AuthorRow;