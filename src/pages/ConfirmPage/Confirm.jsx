import { Link } from "react-router-dom";

const Confirm = () => {
    // Define an array of items
    const items = [
        { label: "Weight Loss", id: 1 },
        { label: "Muscle Gain", id: 2 },
        { label: "Flexibility and Mobility", id: 3 },
        { label: "General Fitness", id: 4 },
        { label: "Event - specific training", id: 5 },
        { label: "Mindfulness and Mental Health", id: 6 }
    ];

    return (
        <div>
            <div>
                <h1 className="text-lg font-semibold text-center py-10">What are your goals?</h1>
            </div>

            {/* Map over the items array */}
            {items.map(item => (
                <div key={item.id} className="bg-gray-50 w-[343px] rounded-xl h-14 flex mx-auto py-4" style={{ marginTop: '1rem' }}>
                    <div className="flex justify-between items-center mx-auto w-full">
                        <div className="w-3/4 pl-4 pr-4">
                            <p className="text-sm">{item.label}</p>
                        </div>
                        <div className="w-1/4 text-right pr-4"> {/* Adjusted width and aligned to the right */}
                        <input className="w-6 h-6 accent-yellow-600 border rounded-md custom-checkbox" type="checkbox"  />
                        </div>
                    </div>
                </div>
            ))}


            <div>
               <Link to="/workout">
               
               <button className="mt-20 tracking-wide font-semibold bg-gradient-to-l from-[#7B91FF] to-[#95BEFF] text-gray-100 w-[343px] mx-auto py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">
                    Confirm
                    </span>
                </button>
               </Link>
            </div>
        </div>
    );
};

export default Confirm;
