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
        <div className="mt-10 flex flex-col items-center justify-center p-6 rounded w-full bg-white">
            <h1 className="text-2xl font-bold mb-4 text-center rounded-lg">Login Here</h1>
            <p className="text-center mt-2 text-gray-900">Welcome back! please log in here</p>
            <form onSubmit={handleSubmit} className="space-y-4 w-96 shadow-2xl px-4 rounded mt-4">
                <input 
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                onChange={handleChange}
                className="w-full p-2 rounded border" 
                />
                <input 
                type="password"
                name="password"
                placeholder="Enter Your Password" 
                onChange={handleChange}
                className="w-full p-2 rounded border"
                />
                <button type="submit" className="w-full bg-amber-500 text-white p-2 rounded hover:bg-amber-800">
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