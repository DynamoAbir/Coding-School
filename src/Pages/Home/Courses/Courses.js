import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(
        () => {
            fetch('http://localhost:5000/courses')
                .then((res) => res.json())
                .then(data => setCourses(data))
        }, []
    )
    return (
        <div className='lg:w-8/12 mx-auto'>
            <div className=' text-sm my-4 text-tealGray-700 rounded grid md:grid-cols-2 lg:grid-cols-3 gap-2  border-tealGray-100 '>
                {courses.map(course => <Course key={course.id} course={course}></Course>)}
            </div>
        </div>
    );
};
/* text-sm my-4 text-tealGray-700 rounded grid md:grid-cols-2 lg:grid-cols-3 gap-2  border-tealGray-100 */
export default Courses;