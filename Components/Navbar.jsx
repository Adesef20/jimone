'use client'
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <header className="w-full bg-gray-700">
          <div className="max-w-7xl flex mx-auto justify-between items-center p-4">
            <Link href="/">
                <h1 className=" text-xl font-bold text-white">
                    Jim-One Motors
                </h1>
            </Link> 
                
            <div className="hidden md:flex items-center justify-center gap-4 text-xl font-bold text-white p-4">
                <Link href="/">home</Link>
                <Link href="/About">about</Link>
                <Link href="/Service">service</Link>
                <Link href="/Faq">faq</Link>
                <Link href="/Contact">contact</Link>
            </div>

            <div className="hidden md:flex justify-center items-center gap-2">
            <div>
                <Link href="/Register">
                 <button className="px-6 py-3 bg-amber-600 text-white font-bold w-24 items-center justify-center rounded-xl h-8 flex hover:bg-amber-900">
                    Register
                 </button>
                </Link>
            </div>
            <div>
                <Link href="/Login">
                 <button className="flex items-center justify-center px-6 py-3 font-bold rounded bg-amber-600 text-white w-34 h-8 hover:bg-amber-950">
                    Login Here
                 </button>
                </Link>
            </div>
            </div>
            
            <div className="md:hidden">
                {isOpen ? (
                    <RxCross2 className="text-2xl text-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    />
                ) : (
                 <GiHamburgerMenu className="text-2xl text-white cursor-pointer"
                 onClick={() => setIsOpen(true)}
                 />
             )}
            </div>
          </div>

            {isOpen &&(
        <div className="md:hidden flex flex-col bg-gray-100 text-black gap-4 px-6 py-4 shadow-md absolute top-15 left-0 w-full z-50">
              <Link href="/" onClick={() => setIsOpen(false)}>home</Link>
                <Link href="/About" onClick={() => setIsOpen(false)}>about</Link>
                <Link href="/Service" onClick={() => setIsOpen(false)}>service</Link>
                <Link href="/Faq" onClick={() => setIsOpen(false)}>faq</Link>
                <Link href="/Contact" onClick={() => setIsOpen(false)}>contact</Link>
                <Link href="/Register" onClick={() => setIsOpen(false)}>
                  <button className="px-4 py-2 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-900">
                    Register
                  </button>
                </Link>
                <Link href="/Login" onClick={() => setIsOpen(false)}>
                  <button className="px-4 py-2 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-950">
                    Login
                  </button>
                </Link>
        </div>
    )}
    </header>
    );
}

export default Navbar;