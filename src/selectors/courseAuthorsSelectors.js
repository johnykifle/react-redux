import { createSelector } from 'reselect';
import _ from 'lodash';

const authorsSelector = state => state.authors;
const coursesSelector = state => state.courses;


const getAggregates = (authors, courses) => {
  const authorIds = authors.map(a => a.id);
  const authorsWithCourses = _.filter(
    courses,
    course => _.contains(authorIds, course.authorId)
  );
};

export default createSelector(
  authorsSelector,
  coursesSelector,
  getAggregates
)
