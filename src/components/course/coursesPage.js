import React from 'react';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            course: {title: ''}
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }
    onClickSave(){
        alert(`Savging ${this.state.course.title}`);
    }
    render(){
        return(
            <div>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value= {this.state.course.title}
                />
                <input 
                    type="button"
                    onClick={this.onClickSave}
                    value="Click Me"/>
            </div>
        );
    }
}

export default CoursesPage;