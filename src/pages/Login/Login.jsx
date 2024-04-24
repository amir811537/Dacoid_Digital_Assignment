import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div className="mt-12 ">
                    <h1 className="text-[20px] text-left font-bold">
                    Welcome Back                    </h1>
                    <div className="w-full flex-1 mt-8">



                        <div className="mx-auto ">

                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="email" placeholder="email" defaultValue="user1@gmail.com" />
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="password" placeholder="Password" defaultValue="user123" />

                            <div className="py-3 space-y-2">
                                <label className=" text-[#7F7F7F] text-left">

                                    <div>
<p className="text-[#7F7F7F] text-left underline">Forgot your password?</p>
                                    </div></label>
                            </div>
                          <Link to="/confirm">
                          <button
                                className="mt-5 tracking-wide font-semibold bg-gradient-to-l from-[#7B91FF] to-[#95BEFF] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <span className="ml-3">
                                Sign In                                </span>
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

                        <div className="text-center py-5">
                            <p>Don’t have an account yet? <Link to="/register"><span className="text-[#819CFF]"> Create an account</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;