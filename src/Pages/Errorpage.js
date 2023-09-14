import React from 'react';
import error from '../Assets/404.jpg'
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='flex items-center justify-center '>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={error} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Ooops!!! The page you are looking for is not found
				
			</h1>
			
			<div className="flex mt-20 flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
				<Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Back To Home</Link>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Errorpage;

/* 

#49a99a
#f3fdf7
*/