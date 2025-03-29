
//import { useState } from "react";

//const { useState } = require("react");


const Faq = ()=>{
    // const [activeIndex, setActiveIndex] = useState(null);

   const toggleAnswer =(index)=>{
       setActiveIndex(activeIndex === index ? null : index);
   }

    return(
        <div className="w-full bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto py-4">
               <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Frequently Ask Question</h1>
            </div>
            <div className="space-y-4">
                <div className="p-5 rounded-md shadow-md bg-white">
                    <div className="flex justify-between items-center cursor-pointer">
                        <h1 className="font-semibold text-xl text-gray-700">What is Jim-One Motors</h1>
                    </div>
                    <div className="">
                        <p className="mt-4 text-gray-500">Jim-One Motors is a premier car dealership offering a wide range of vehicles for sale, trade, and swap. We pride ourselves on providing the best customer service and reliable cars.</p>
                    </div>
                </div>
            </div>
            
        </div>
     );
 }

export default Faq;