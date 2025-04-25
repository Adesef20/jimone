'use client'
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () =>{
    const [form, setForm] = useState({name:"", email:"", message:"", phone:"",})

    const handlechange = (e) =>{
        setForm({... form, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        e.preventDefault()

        alert('Message sent successfully')
        setForm({firstname:"", othername:"", email:"", message:"", phonenumber:"", address:"",})
    }
    return(
        <div>
            <section className="py-6 text-center bg-slate-200 text-white">
          <h2 className="text-3xl font-bold text-gray-800">Find Your Dream Car Today</h2>
          <p className="mt-4 text-gray-600">Visits Jim-One Motors or contact us here for the best deals.</p>

          <div className="flex flex-col items-center justify-center p-6 text-sm bg-slate-200">
          <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg shadow-lg text-gray-900">
            {/* First Name */}
            <div className="mb-4 items-start justify-start flex flex-col gap-2">
                <label htmlFor="firstName" className="block text-slate-700 font-semibold mb-1">First Name:</label>
                <input type="text"
                id="firstname"
                name="firstname"
                value={form.firstnamename}
                onChange={handlechange}
                required
                className="w-full p-2 border border-gray-900 rounded focus:outline-none focus:right-2 focus:ring-amber-800"
                 />
            </div>

            {/* Other Names */}
            <div className="mb-4 items-start justify-start flex flex-col gap-2">
                <label htmlFor="othername" className="block text-gray-700 font-semibold mb-1">Other Name:</label>
                <input type="text"
                id="othername"
                name="othername"
                value={form.othername}
                onChange={handlechange}
                required
                className="w-full p-2 border border-gray-900 rounded focus:outline-none focus:right-2 focus:ring-amber-500"
                 />
            </div>

            {/* Address */}
            <div className="mb-4 items-start justify-start flex flex-col gap-2">
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">Address:</label>
                <input type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handlechange}
                required
                className="w-full p-2 border border-gray-900 rounded focus:outline-none focus:right-2 focus:ring-amber-500"
                 />
            </div>

            {/* Phone number */}
            <div className="mb-4 justify-start items-start flex flex-col gap-2">
                <label htmlFor="phonenumber" className="block text-gray-700 font-semibold">Phone Number:</label>
                <input type="text"
                id="phonenumber"
                name="phonenumber"
                value={form.phonenumber}
                onChange={handlechange}
                required
                className="w-full p-2 border border-gray-900 rounded focus:outline-none focus:right-2 focus:ring-amber-800"
                 />
            </div>

            {/* Email Address */}
            <div className="mb-4 justify-start items-start flex flex-col gap-2">
                <label htmlFor="emailadress" className="block text-gray-700 font-semibold mb-1">Email Address:</label>
                <input type="text"
                id="emailaddress"
                name="emailaddress"
                value={form.emailaddress}
                onChange={handlechange}
                required
                className="w-full p-2 border border-gray-900 rounded focus:outline-none focus:right-2 focus:ring-amber-500"
                 />
            </div>

            {/* Message */}
            <div className="mb-4 items-start justify-start flex flex-col gap-2">
                <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-1">Message:</label>
                <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handlechange}
                required
                className="w-full p-2 border border-gray-900 rounded focus:outline-none focus:right-2 focus:ring-amber-500"  
                rows="4"
                ></textarea>
            </div>
            
            {/* submit button  */}
            <button 
            type="submit"
            className="w-full left-4 flex text-center justify-center text-white bg-amber-600 p-2 rounded hover:bg-amber-800 transition">
                Send Message
            </button>
            </form>
            <div className="mt-10">
                <h2 className="font-bold text-2xl text-gray-800 mb-4">Reach Out Instantly</h2>
                <a 
                href="https://wa.me/2347039406230?text=Hello%20Jim-One%Motors%2C%20I'm%20interested%20in%20your%20cars"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-md transition-all duration-200 semi-bold px-5 py-3"
                >
                    <FaWhatsapp size={22} />
                    Chat with us on Whatsapp
                </a>
            </div>
          </div>
        </section>
        </div>
        
    );
};

export default Contact;