"use client";
import { useState } from "react";
import Link from "next/link";


const Register = () =>{

    const [FormData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });

    const HandleChange = (e) => {
       setFormData({...FormData, [e.target.name]: e.target.value});
    };

    const handlesubmit = (e) => {
       e.preventDefault();
    
    console.log("user Register:", FormData);
    };

    return(
        <div className="mt-10 bg-white rounded p-6 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Register</h1>
            <p className="text-center mt-2 text-gray-900 p-4">Create your account to get started</p>
            <form onSubmit={handlesubmit} className="space-y-4 w-96 shadow-2xl px-4 rounded">
                <input 
                type="text" 
                name="name"
                placeholder="Enter Your Full Name"
                onChange={HandleChange}
                className="rounded border p-4 w-full"
                required
                />
                <input 
                type="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                onChange={HandleChange}
                className="rounded border p-4 w-full" 
                required
                />
                <input 
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={HandleChange}
                className="w-full rounded border p-4" 
                required
                />
                <input 
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={HandleChange}
                className="w-full p-4 rounded border"
                required
                />
                <button type="submit" className="w-full bg-amber-500 text-white p-2 rounded hover:bg-amber-800">
                    Sign Up
                </button>

                <p className="text-sm  text-center">
                    Already have an account?{" "}
                    <Link href="/Login" className="text-amber-500 hover:underline">
                      Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Register;