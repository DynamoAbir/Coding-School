import React, { useEffect, useState } from 'react';
import CoursesBtn from './CoursesBtn';

const CoursesHome = () => {
  const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then((res)=>res.json())
        .then((data)=>setCourses(data));
        console.log(courses);
    },[])
  return (
    <div>
      <div>
            <div className="relative mx-auto py-8 md:py-16 px-4 w-full  bg-[#49a99a]">
      <div className="mx-auto max-w-5xl">

        {/* :TITLE CONTAINER */}
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl text-white font-bold">Top Rated Courses</h2>
          <a href="#link" className="text-base text-white text-opacity-60 font-semibold hover:underline hover:text-opacity-80">See All</a>
        </div>


        
        <div className="mt-8 mx-auto md:mx-auto max-w-md md:max-w-none grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
          {courses.slice(0,3).map((course) => (
            <a  key={course.id} className="col-span-1 group relative p-2 pb-5 flex flex-col items-center border-2 border-transparent rounded-xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm hover:shadow-xl hover:border-[#48c1ae]">
              {/* ::Image */}
              <div className="relative max-h-64 rounded-2xl overflow-hidden">
                <img src={course.image} alt="" className="object-cover my-14  rounded-xl transition duration-200 ease-in transform group-hover:scale-105" />
                {/* :::time left */}
               
              </div>
              {/* ::Details */}
              <div className="mt-2 px-2 w-full flex flex-col space-y-1">
                {/* :::name */}
                <p className="text-xl text-white text-opacity-80 font-semibold tracking-wide group-hover:text-opacity-100">{course.name}</p>
                
                {/* :::bid infos */}
                <span className="items-center">
                  <span className="mr-4 text-sm text-white font-semibold">{`Current Bid: ${course.description.slice(0,200)}`}</span>
                 </span>
                <CoursesBtn>Course Details</CoursesBtn>
              </div>
            </a>
          ))
          }
        </div>

      </div>      
    </div>
        </div>
    </div>
  );
};

export default CoursesHome;