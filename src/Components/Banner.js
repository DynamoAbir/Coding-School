import React from "react";
import banner from "../Assets/3426526.jpg";
import miniBanner from "../Assets/6502423.jpg";
import CodingBtn from "./CodingBtn";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="mt-[-14px] relative w-full h-full bg-green-300 bg-opacity-10">
      <div className="mx-auto max-w-8xl flex flex-col md:flex-row justify-center">
        {" "}
        {/* Inner Container */}
        {/* :HERO LEFT SIDE */}
        <div className="relative py-10 md:ml-7 lg:ml-20 w-full md:w-1/2 h-full flex flex-col justify-center">
          {/* ::Double Band */}

          {/* ::Hero Main */}
          <div className="pt-14 sm:py-20 lg:py-32 px-5 flex flex-col justify-center text-center sm:text-left">
            {/* :::Small Title */}
            <h2 className="text-sm ms-1 text-gray-600 font-bold tracking-widest uppercase">
              Here We Go !!!
            </h2>
            {/* :::Main Title */}
            <h1 className="py-5 text-4xl sm:text-5xl md:text-7xl text-gray-700 font-semibold capitalize">
              Develop Coding skills. And transform your goals into gains. Happy
              Coding!
            </h1>
            {/* :::Text */}

            {/* :::Button & Social media */}
            <div className="mt-10 flex flex-col sm:flex-row items-center">
              {/* Button */}
              <Link to='/courses'><CodingBtn>Lets Go To Our Courses</CodingBtn></Link>
              {/* Social networks */}
              <div className="mt-5 sm:mt-0 sm:ml-5 inline-flex items-center">
                {/* Twitter */}
                <a href="#link" className="mx-3">
                  <svg
                    className="w-7 h-7 transform hover:scale-105"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                {/* Linkedin */}
                <a href="#link" className="mx-3">
                  <svg
                    className="w-7 h-7 transform hover:scale-105"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Google + */}
                <a href="#link" className="mx-3">
                  <svg
                    className="w-7 h-7 transform hover:scale-105"
                    enableBackground="new 0 0 24 24"
                    height="512"
                    viewBox="0 0 24 24"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
                    <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* :HERO RIGHT SIDE */}
        <div className="relative w-1/2 min-h-full overflow-hidden">
          {/* ::Hero Image 1 */}
          <img
            src={banner}
            alt=""
            className="hidden md:block absolute bottom-0 left-1/2 h-3/4 opacity-70 shadow-xl transform -translate-x-1/2"
          />
          {/* ::Hero Image 2 */}
          <img
            src={miniBanner}
            alt=""
            className="hidden md:block absolute top-24 right-0 h-1/4 lg:h-1/3 opacity-70 rounded-sm shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
