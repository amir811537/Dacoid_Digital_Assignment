import image from "../assets/image 16.png";
import btnimage from "../assets/Group 1.png";
import { Link } from "react-router-dom";
const Home2 = () => {
    return (
        <div >
            <div className="py-7 p-6">
               <Link to="/register"><p className="text-right underline text-[#9FB2FF] text-xs">Skip</p></Link> 
                </div> 

<div className="flex items-center py-7 justify-center mx-auto">
    <img src={image} alt="home img" />
</div>
<div className="py-7 p-6 clear-left">
    <h1 className="font-semibold text-[20px]">Track Your Goal</h1>
    <p className="py-4 text-[#787878]">Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
</div>
 
<div className="flex justify-end items-end p-6 py-7">
<Link to="/register">
  <button className="h-16 w-16 rounded-full"><img src={btnimage
    
    
} alt="btn" /></button>
  </Link>
</div>

        </div>
    );
};

export default Home2;