import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';


const CoursesDetails = () => {
	const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const course=useLoaderData();
    console.log(course);
	

    return (
        <div>
            <section ref={targetRef}>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">{course.name}</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">{course.description}</p>
			<div className="flex flex-wrap justify-center">
				
				<button onClick={() => toPDF()} type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 hover:bg-[#49a99a] hover:text-white">Download Outline</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 hover:bg-[#49a99a] hover:text-white">Get Premium Access!</button>
			</div>
		</div>
	</div>
	<img src={course.image} alt="" className="w-2/4 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
</section>
        </div>
    );
};

export default CoursesDetails;