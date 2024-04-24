/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from "react-router-dom";
import arrowsign from "../../assets/chevron-left.png";
import chartimg from "../../assets/Chart Full.png"
import worningicon from "../../assets/alert-triangle.png"
import workout from "../../assets/Ellipse 53.png"
import workout2 from "../../assets/Ellipse 54.png"
import workout3 from "../../assets/Ellipse 55.png"
import navicon1 from "../../assets/homeicon.png"
import navicon2 from "../../assets/Group.png"
import navicon3 from "../../assets/camereicon.png"
import navicon4 from "../../assets/personicon.png"
import navicon5 from "../../assets/Group 1.png"
const Workout = () => {
    return (
        <div>

{/* header text */}
<div className="flex items-center justify-between px-5 py-10"> 
    <div className="w-1/12"> 
        <Link to="/confirm">
        <img src={arrowsign} alt="arrow" className="w-6 h-6" />
        </Link>
    </div>
    <div className="w-full">
        <h1 className="text-lg font-semibold text-center md:text-left">Workout Tracker</h1>
    </div>
</div>

{/* cart here  */}

<div>
<div className="flex items-center justify-end gap-5">
    <p className="pr-3">Good job</p>
<p className="pr-10">less then 320cal</p>
</div>
    <img className="flex mx-auto" src={chartimg} alt="chart image" />
</div>
{/*  warning here */}
<div className="flex h-[50px]  w-[343px] mx-auto border rounded-xl p-5 gap-6 bg-gradient-to-r from-[#819DFF47] to-[#fff] justify-center items-center mt-20">

<div >
    <img className="w-8" src={worningicon} alt="warningIcon" />
</div>
<p>You've burned fewer calories than yesterday. Time to get moving! </p>

</div>


{/*  upcoming workout */}
{/* header */}
 <div className="flex justify-between items-center mx-auto p-10">
    <h1 className="text-sm font-semibold">Upcoming Workout</h1>
    <button className="text-gray-300">See more</button>
 </div>
 {/* content */}
 <div className=" flex items-center bg-[#FFFFFF]  rounded-xl mx-auto p-5 w-[343px] h-[75px]">

<div className=" flex items-center w-3/4">
<img src={workout} alt="full body" />
<div className=" pl-5">
<p>Full Body Workout</p>
<p className="text-gray-300">Today 3pm</p>

</div>
</div>

<div className="pl-8 w-1/4">
<input type="checkbox" className="toggle [--tglbg:#7B91FF]"  />

</div>

 </div>
 {/* content 2 */}
 <div className=" mt-2 flex items-center bg-[#FFFFFF]  rounded-xl mx-auto p-5 w-[343px] h-[75px]">

<div className=" flex items-center w-3/4">
<img src={workout2} alt="full body" />
<div className=" pl-5">
<p>Upper Body Workout</p>
<p className="text-gray-300">4 Feb, 3:30 pm</p>

</div>
</div>

<div className="pl-8 w-1/4">
<input type="checkbox" className="toggle [--tglbg:#7B91FF]"  />

</div>

 </div>

{/* header */}
 <div>
    <p className="text-left font-semibold text-sm p-8">What Do You Want to Train</p>
 </div>
 {/* content card */}
 <div className="bg-[#8CB1FF99] w-[343px] h-[124px] flex mx-auto rounded-xl">

<div className="w-3/5 pl-3 p-5 ">
    <p className="text-[16px]">Full Body Workout</p>
    <p>Arms</p>
    <p>Chest</p>

</div>

    <div className="mt-5 pl-5">
        <img src={workout3} alt="" />
    </div>
 </div>

 {/*  navbar bottom */}

 <nav className="fixed bottom-0 left-0 w-full bg-gray-100 h-[76px] flex justify-between items-center px-5 md:px-10">
    <NavLink to="/schedule">
        <img src={navicon1} alt="home icon" />
    </NavLink>
    <NavLink>
        <img src={navicon2} alt="home icon" />
    </NavLink>
    <div className="pb-14">
        <NavLink>
            <img src={navicon5} alt="search" />
        </NavLink>
    </div>
    <NavLink>
        <img src={navicon3} alt="home icon" />
    </NavLink>
    <NavLink>
        <img src={navicon4} alt="home icon" />
    </NavLink>
</nav>

 
         
        </div>
    );
};

export default Workout;