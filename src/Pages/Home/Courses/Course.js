import React from 'react';
import BtnSchool from '../../../Components/NavBar/BtnSchool/BtnSchool';
import { FaStar } from "react-icons/fa";

const Course = ({ course }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={course.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {course.name}

                </h2>

                <p>{course.description.slice(0, 200)}</p>
                <div className="mt-2.5 mb-5 flex items-center">
                    <span className="mr-2 rounded bg-teal-100 px-2.5 py-0.5 text-sm flex  font-semibold text-teal-800 dark:bg-teal-200 dark:text-teal-800">
                        <FaStar></FaStar>
                        {course.rating}
                    </span>
                </div>
                <div className="card-actions justify-between my-3">
                    <h4 className="text-3xl font-bold">${course.price}</h4>
                    <BtnSchool>See Details</BtnSchool>
                </div>
            </div>
        </div>
    );
};

export default Course;