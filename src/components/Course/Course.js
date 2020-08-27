import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import CourseCart from '../CourseCart/CourseCart';
import './Course.css';
const Course = () => {
    const data = fakeData.slice(0,13);
    const[courses] = useState(data);
    const[addCourses,setCourses] = useState([]);
    const handleAddCourse = (course)=>{
      const newCourse = [...addCourses,course];
      setCourses(newCourse);
      
    }
    return (
        <div class="course-container">
          <div className="course-subject-container">
            {
              courses.map(course =><CourseDetails handleAddCourse={handleAddCourse} course={course}></CourseDetails>)
            }
          </div>
          <div className="course-card-container">
            <CourseCart cart={addCourses}></CourseCart>
          </div>
        </div>
    );
};

export default Course;