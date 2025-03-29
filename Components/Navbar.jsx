import Link from "next/link";


const Navbar = ()=>{
    return(
        <header className="w-full bg-gray-700">
            <div className="max-w-7xl flex mx-auto justify-between items-center p-4">
                <h1 className=" text-xl font-bold text-white">
                    Jim-One Motors
                </h1>
            </div>
            <div className="flex items-center gap-4 justify-center text-xl font-bold text-white p-4 ml-20 -mt-14">
                <Link href="/">home</Link>
                <Link href="/About">about</Link>
                <Link href="/Service">service</Link>
                <Link href="/Faq">faq</Link>
                <Link href="/Contact">contact</Link>
            </div>
            
            </header>
        
    );
}

export default Navbar;