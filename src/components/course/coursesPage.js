import DeleteButton from '../common/DeleteButton';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';
import Button from '../common/Button';
import DeleteBtnHOC from '../common/DeleteBtnHOC';
import ExpandableTable from '../common/ExpandableTable';
import Canvas from '../common/Canvas';
import Mondrian from '../common/Mondrian';
//import courseSelects from '../../selectors/courseAuthorsSelectors';

const DBtn =  DeleteBtnHOC(Button);

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            course: {title: ''}
        };
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }
    render(){
        const {courses, agg} = this.props;

        return(
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
               <CourseList courses={courses}/>
               <DBtn />
               <ExpandableTable/>
                <Mondrian/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired

};
function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
        // agg: courseSelects(state)
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
