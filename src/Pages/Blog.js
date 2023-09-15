import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div className="justify-center items-center flex">
      {blog.map((b) => (
        <div key={b.id} className="mb-4 p-0 sm:p-4 md:w-1/2 ">
          {" "}
          {/* Card container */}
          <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
            {/* :CARD IMAGE */}
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
              src={b?.imageURL}
              alt="blog"
            />

            {/* :CARD CATEGORY */}
            <h2 className="pt-4 pb-1 px-6 inline-block text-xs title-font font-semibold text-red-400 uppercase tracking-widest cursor-pointer hover:font-bold">
              Blog No:{b.id}
            </h2>

            {/* :CARD BODY */}
            <div className="py-1 px-6">
              {/* ::Card title */}
              <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
                {b.question}
              </h1>
              {/* ::Card excerpt */}
              <p className="line-clamp-none mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">
                {b.answers}
              </p>
            </div>

            {/* :CARD FOOTER */}
            <div className="pt-1 pb-4 px-6 flex justify-between items-center flex-wrap">
              {/* ::Date & reading time */}
              <div className="flex flex-wrap text-sm text-gray-500">
                <span className="mr-1">Sep 15, 2023</span>
                <span className="">&#183; 8 min read</span>
              </div>
              {/* ::Likes & Views */}
              <div className="mt-1">{/* Likes */}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
