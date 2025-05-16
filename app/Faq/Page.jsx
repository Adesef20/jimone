'use client'
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
        
       const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
       };
    
       const faqList = [
        {
          question: "What types of car do you sell?",
          answer:"We sell a wide range of vehicles: sedans, SUVs trucks amd luxury cars.",
        },
        {
          question: "Can i trade in my old?",
          answer: "Absolutely! We offer trade-in option and provide a fair evaluation for your vehicle.",
        },
        {
          question: "Do you offer a warrant on purchases?",
          answer: "Yes, all our cars come with a warranty to ensure quality and customer satisfaction.",
        },
        {
          question: "How can I book a test drive?",
          answer: "Simply contact us or visit our showroom to schedule a test drive at your convenience.",
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we provide flexible financing options tailored to your budget.",
        },
       ];
    return(
        <section className="max-w-2xl p-4 mx-auto mt-10 mb-20 rounded-lg shadow-lg bg-slate-200 sm:mb-14 md:mb-20 lg:mb-24">
              <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
                Frequency Ask Question
              </h1>
              <div className="space-y-4">
        
                {faqList.map((item, index) => (
                 <div key={index} className="overflow-hidden bg-white border rounded-lg">
                  <button 
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full px-4 py-3 font-semibold text-left text-gray-800 transition bg-gray-100 hover:bg-gray-200"
                  >
        
                 <span>{item.question}</span>
                 {openIndex === index ? (
                  <FaChevronUp className="w-5 h-5 ml-2 text-gray-600"/>
                 ) : (
                  <FaChevronDown className="w-5 h-5 ml-2 text-gray-600"/>
                 )}
                  </button>
                  {openIndex === index && (
                    <div className="px-4 py-3 text-gray-700 bg-white border-t">
                      {item.answer}
                    </div>
                  )}
                </div>
                ))}
              </div>
            </section>
    );
}

export default Faq;