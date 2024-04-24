import { Link, NavLink } from "react-router-dom";
import arrowsign from "../../assets/chevron-left.png";
import navicon1 from "../../assets/homeicon.png"
import navicon2 from "../../assets/Group.png"
import navicon3 from "../../assets/camereicon.png"
import navicon4 from "../../assets/personicon.png"
import navicon5 from "../../assets/Group 1.png"
import { FaGreaterThan } from "react-icons/fa6";
import { TbMathLower } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";

const Schedule = () => {
    return (
        <div>
            {/* header */}
            <div className="flex items-center justify-between px-5 py-10"> 
                <div className="w-1/12"> 
<Link to="/workout">
<img src={arrowsign} alt="arrow" className="w-6 h-6" />

</Link>
                </div>
                <div className="w-full">
                    <h1 className="text-lg font-semibold text-center md:text-left">Workout Schedule</h1>
                </div>
            </div>

            {/* date and month */}
            <div className="flex justify-center items-center gap-2">
                <div>
                    <TbMathLower className="font-extrabold text-xl"/>
                </div>
                <div>
                    Feb 2024
                </div>
                <div>
                    <FaGreaterThan/>
                </div>
            </div>

            {/* calendar show date */}
            <div className="mt-4 w-[343px] h-[76px] bg-gray-50 rounded-xl flex mx-auto">
                <div className="flex justify-center items-center gap-2 "> 
                    <div className="w-[63px] h-[76px] bg-white text-center flex-1 justify-center items-center rounded-xl ">
                        <p>Sun</p>
                        <p className="text-xl">5</p>
                    </div>
                    <div className="w-[63px] h-[76px] rounded-xl bg-gradient-to-l from-[#8DA4FF] to-[#D1DBFF] text-white text-center flex-1 justify-center items-center">
                        <p>Mon</p>
                        <p className="text-xl">6</p>
                    </div>
                    <div className="w-[63px] h-[76px] bg-white text-center flex-1 justify-center items-center rounded-xl  ">
                        <p>Tue</p>
                        <p className="text-xl">7</p>
                    </div>
                    <div className="w-[63px] h-[76px] bg-white text-center flex-1 justify-center items-center rounded-xl ">
                        <p>Wed</p>
                        <p className="text-xl">8</p>
                    </div>
                    <div className="w-[63px] h-[76px] bg-white text-center flex-1 justify-center items-center rounded-xl ">
                        <p>Thu</p>
                        <p className="text-xl">9</p>
                    </div>
                </div>
            </div>

            {/* time show */}
            <div className="py-10">
                <div>
                    <p className="w-[343px] flex-1 mx-auto">06:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                </div>
                <div className="relative">
                    <p className="w-[343px] flex-1 mx-auto">07:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                    <div className="absolute right-4 top-5 bg-gradient-to-r text-white from-[#E9B1E0] to-[#D1DBFF] px-2 py-1 rounded-3xl">
                        <p>Ab Workout, 7:30am</p>
                    </div>
                </div>
                <div>
                    <p className="w-[343px] flex-1 mx-auto">08:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                </div>
                <div className="relative">
                    <p className="w-[343px] flex-1 mx-auto">09:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                    <div className="absolute right-4 top-0 text-white bg-gradient-to-r from-[#E9B1E0] to-[#D1DBFF] px-2 py-1 rounded-3xl">
                        <p>Upperbody Workout, 9am</p>
                    </div>
                </div>
                <div>
                    <p className="w-[343px] flex-1 mx-auto">10:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                </div>
                <div>
                    <p className="w-[343px] flex-1 mx-auto">11:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                </div>
                <div>
                    <p className="w-[343px] flex-1 mx-auto">12:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                </div>
                <div>
                    <p className="w-[343px] flex-1 mx-auto">01:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                </div>
                <div className="relative">
                    <p className="w-[343px] flex-1 mx-auto">02:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                    <div className="absolute right-20  bottom-0 -top-1 bg-gray-200 px-2 py-1 rounded-3xl">
                        <p>Lowerbody Workout, 3pm</p>
                    </div>
                </div>
                <div className="relative">
                    <p className="w-[343px] flex-1 mx-auto">03:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                    <div className="absolute w-16 h-16  flex 
                    justify-center items-center bottom-0 -top-1  right-4 bg-gradient-to-r from-[#E9B1E0] to-[#D1DBFF] px-2 py-1 rounded-full">
                       <div>
<FaPlus className="text-xl text-white"/>
                       </div>
                    </div>
                </div>
                <div>
                    <p className="w-[343px] flex-1 mx-auto">04:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                </div>
                <div>
                    <p className="w-[343px] flex-1 mx-auto">05:00 AM</p>
                    <hr className="h-px my-2 bg-[#7F7F7F] border-0 dark:bg-gray-700"/>
                </div>
                {/* Add other time slots here */}
            </div>



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

export default Schedule;