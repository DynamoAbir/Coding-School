import React, { useEffect, useState } from 'react';
import CoursesCards from '../Components/CoursesCards';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then((res)=>res.json())
        .then((data)=>setCourses(data));
        console.log(courses);
    },[])
    return (
        <div>
          <div className="drawer mt-[-15px] lg:drawer-open bg-[#f3fdf7]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <CoursesCards></CoursesCards>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu w-96 min-h-full bg-[#f3fdf7] text-base-content">
            {/* Sidebar content here */}
            {courses.map(c=>(<Link to={`/courses/${c.id}`} key={courses.id}>
            <li><a className='py-10 text-xl font-bold px-20'> {c.name}</a></li>
            </Link>))}
            
            
          </ul>
        
        </div>
      </div>
        </div>
    );
};

export default Courses;