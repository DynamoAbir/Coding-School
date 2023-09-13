import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';



const CheckOut = () => {
    const course=useLoaderData();

    const navigate=useNavigate();
    const {user}=useContext(AuthContext);
    console.log(course);
    const CheckOutPayment=(e)=>{
        e.preventDefault();
        navigate('/');
    }
    return (
        <div className='flex justify-center mt-[-15px] bg-[#f3fdf7]'>
            <div className="min-h-screen  p-4 mt-20 leading-loose">
  <form onSubmit={CheckOutPayment} className="max-w-lg m-4 p-4 bg-white rounded shadow-xl">
    <p className="text-gray-800 text-2xl font-medium mb-5">Check Out for {course.name}</p>
    <hr className='h-4' />
    <p className="text-gray-800 text-xl font-medium">Customer information</p>
    <div className="">
      <label className="block text-sm text-gray-600" for="cus_name">Name</label>
      <input className="w-full px-2 py-2 required text-gray-700 bg-gray-200 " id="cus_name" name="cus_name" type="text" required placeholder="Your Name" aria-label="Name"/>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" for="cus_email">Email</label>
      <input className="w-full px-2 py-2 required text-gray-700 bg-gray-200 " id="cus_email" name="cus_email" type="email" required placeholder="Your Email" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" for="cus_email">Address</label>
      <input className="w-full px-2 py-2 required text-gray-700 bg-gray-200 " id="cus_email" name="cus_email" type="text" required placeholder="Street" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className="hidden text-sm  text-gray-600" for="cus_email">City</label>
      <input className="w-full px-2 py-2 required text-gray-700 bg-gray-200 " id="cus_email" name="cus_email" type="text" required placeholder="City" aria-label="Email"/>
    </div>
    <div className="inline-block mt-2 w-1/2 pr-1">
      <label className="hidden  text-sm text-gray-600" for="cus_email">Country</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 " id="cus_email" name="cus_email" type="text" required placeholder="Country" aria-label="Email"/>
    </div>
    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label className="hidden  text-sm text-gray-600" for="cus_email">Zip</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 " id="cus_email"  name="cus_email" type="text" required placeholder="Zip" aria-label="Email"/>
    </div>
    <p className="mt-4 text-gray-800 text-xl font-medium">Payment information</p>
    <div className="">
      <label className="block text-sm text-gray-600" for="cus_name">Card</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 " id="cus_name" name="cus_name" type="text" required placeholder="Card Number MM/YY CVC" aria-label="Name"/>
    </div>
    <div className="mt-4">
      <button className="px-10 py-1 text-white font-light tracking-wider bg-[#49a99a] rounded " type="submit">{course.price}$</button>
      
    </div>
  </form>
</div>


        </div>
    );
};

export default CheckOut;