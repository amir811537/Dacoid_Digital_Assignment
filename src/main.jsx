import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Home2 from './Home/Home2';
import Register from './pages/register/Register';
import Login from './pages/Login/Login';
import Confirm from './pages/ConfirmPage/Confirm';
import Workout from './pages/Workout/Workout';
import Schedule from './pages/Schedule/Schedule';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },


  {
    path:'/home2',
    element:<Home2></Home2>
  },
  {
    path:"/register",
    element:<Register></Register>,
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:'/confirm',
    element:<Confirm></Confirm>
  },

  {
    path:"/workout",
    element:<Workout></Workout>
  },
  {
    path:"/schedule",
    element:<Schedule></Schedule>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className=''>
   <RouterProvider router={router} />
   </div>
     </React.StrictMode>,
)
