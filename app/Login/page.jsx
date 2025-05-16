"use client"
import { useState } from "react";
import Link from "next/link";


const Login = () =>{
    const [FormData, setFormData] = useState({
        email:"",
        password:"",
    });

    const handleChange = (e) => {
        setFormData({...FormData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Logging in with", FormData)
    }
    return(
        <div className="flex flex-col items-center justify-center w-full p-6 mt-10 bg-white rounded">
            <h1 className="mb-4 text-2xl font-bold text-center rounded">Login Here</h1>
            <p className="mt-2 text-center text-gray-900">Welcome back! please log in here</p>
            <form onSubmit={handleSubmit} className="px-4 mt-4 space-y-4 rounded shadow-2xl w-96">
                <input 
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                onChange={handleChange}
                className="w-full p-2 border rounded" 
                />
                <input 
                type="password"
                name="password"
                placeholder="Enter Your Password" 
                onChange={handleChange}
                className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full p-2 text-white rounded bg-amber-500 hover:bg-amber-800">
                    Login Here
                </button>
                <p className="text-sm text-center">
                    Don't have account?{" "}
                    <Link href="/Register" className="text-amber-500 hover:underline">
                      Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;