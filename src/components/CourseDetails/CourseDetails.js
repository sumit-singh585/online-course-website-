import React from 'react';
import './CourseDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
const CourseDetails = (props) => {
    const { img, name, description, price } = props.course;
    return (
        <div className="row course-section">
            <div className="col-md-4">
            <img style={{ width: '100px' }} src={img} alt="" srcset="" />
            </div>
            <div className="col-md-8">
            <h2 className="course-name">{name}</h2>
            <p className="course-description">{description}</p>
            <p>${price}</p>
            <button class="main-button" onClick={() => props.handleAddCourse(props.course)}><FontAwesomeIcon icon={faCartArrowDown} />enroll now</button>
             </div>
        </div>
    );
};

export default CourseDetails;