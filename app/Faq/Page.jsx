'use client';
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown} from "react-icons/fa";


export default function Faq() {
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

  return (
    <section className="max-w-2xl mx-auto p-4 shadow-lg rounded-lg bg-slate-200 mt-10 mb-20 sm:mb-14 md:mb-20 lg:mb-24">
      <h1 className="text-center font-bold text-3xl text-gray-800 mb-6">
        Frequency Ask Question
      </h1>
      <div className="space-y-4">

        {faqList.map((item, index) => (
         <div key={index} className="border rounded-lg overflow-hidden bg-white">
          <button 
          onClick={() => toggle(index)}
          className="w-full text-left px-4 py-3 font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition flex justify-between items-center"
          >

         <span>{item.question}</span>
         {openIndex === index ? (
          <FaChevronUp className="h-5 w-5 text-gray-600 ml-2"/>
         ) : (
          <FaChevronDown className="h-5 w-5 text-gray-600 ml-2"/>
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
