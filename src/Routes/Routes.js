import Blog from "../Pages/Blog";
import CheckOut from "../Pages/CheckOut";
import Courses from "../Pages/Courses";
import CoursesDetails from "../Pages/CoursesDetails";
import FAQ from "../Pages/FAQ";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Components/Home");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/Signup',
                element:<SignUp></SignUp>

            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
           
            {
                path:'/courses/:id',
                element:<CoursesDetails></CoursesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
                
            },
            {
                path:'/checkout/:id',
                element:(<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>),
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
            }
           
        ]
    }
])

