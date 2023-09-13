import React from 'react';
import { Link } from 'react-router-dom';

const CoursesBtn = ({children,course}) => {
    return (
        <Link to={course.id} class="relative px-5 py-2 font-medium text-white group">
        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#48c1ae] group-hover:bg-[#49a99a] group-hover:skew-x-12"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#49a99a] group-hover:bg-[#48c1ae] group-hover:-skew-x-12"></span>
        <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#49a99a] -rotate-12"></span>
        <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#8aecc1] -rotate-12"></span>
        <span class="relative">{children}</span>
        </Link>
    );
};

export default CoursesBtn;

/* light = #f3fdf7
    Dark= #49a99a
    light-dark= #49a99a
    light-light= #8aecc1
    */