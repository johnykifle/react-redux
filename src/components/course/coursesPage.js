import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            course: {title: ''}
        };
    }
    render(){
        const {courses} = this.props;
        return(
           <CourseList courses={courses}/>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired

};
function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);