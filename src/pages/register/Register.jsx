import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="mt-12 ">
                        <h1 className="text-[20px] text-left font-bold">
                            Create an account
                        </h1>
                        <div className="w-full flex-1 mt-8">



                            <div className="mx-auto ">


                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text" placeholder="First Name" defaultValue="demo"/>
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="text" placeholder="Last Name "  defaultValue="user"/>

                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="email" placeholder="email" defaultValue="user1@gmail.com" />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" defaultValue="user123" />

                                <div className="flex flex-col items-center justify-center py-3 space-y-2">
                                    <label className=" text-[#7F7F7F] font-normal flex items-start space-x-2">
                                        <div><input type="checkbox" checked className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600" required="" /></div>

                                        <div>

                                            By proceeding, I agree to all <span className="text-[#93A9FF]">T&C</span> and  <span className="text-[#93A9FF]">Privacy Policy</span>

                                        </div></label>
                                </div>
                           <Link to="/login">
                           <button
                                    className="mt-5 tracking-wide font-semibold bg-gradient-to-l from-[#7B91FF] to-[#95BEFF] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <span className="ml-3">
                                    Create an Account
                                    </span>
                                </button>
                                </Link>
                        
                            </div>

                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign up with e-mail
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 items-center">
                                <button
                                    className=" border border-gray-400 p-3 rounded-md">
                                 <FcGoogle className="w-5 h-5" />

                                
                                </button>

                                <button className=" border border-gray-400 p-3 rounded-md"
                                 >

                                    <ImFacebook className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="py-5 text-center">
                                <p>Already have an account? <Link to="/login"><span className="text-[#819CFF]">Login</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;