import Link from "next/link";

const Footer = ()=>{
    return(
        <footer className="bg-gray-900 w-full py-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-2xl text-amber-500 font-bold">Jim-One Motors</h1>
                <p className="mt-1 text-sm">Your trusted partner in quality cars</p>
            </div>
            <div>
                <h1 className="text-amber-500 font-semibold text-lg p-2">Quick Links</h1>
                <ul className="space-y-2 p-2">
                    <li><Link href="/">home</Link></li>
                    <li><Link href="about/">about</Link></li>
                    <li><Link href="service/">service</Link></li>
                    <li><Link href="faq/">faq</Link></li>
                    <li><Link href="contact/">contact</Link></li>
                </ul>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col text-center items-center -mt-50">
                <h2 className=" text-lg font-semibold text-amber-500">Contact Us</h2>
                <p className="flex items-center gap-2">+2347039406230</p>
                <p className="flex items-center gap-2">info@jimonemotors.com</p>
                <p className="flex items-center gap-2">Oshogbo Osun State,Nigeria</p>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col text-right -mt-10">
                <h2 className="text-lg font-semibold text-amber-500 mb-2">Follow Us</h2>
                <div className="flex justify-center md:justify-start gap-4 text-xl">
                    <Link href="https://facebook.com" target="blank" className="hover:text-amber-400"></Link>
                    <Link href="https://twitter.com" target="blank" className="hover:text-amber-400"></Link>
                    <Link href="https://instagram.com" target="blank" className="hover:text-amber-400"></Link>
                </div>
            </div>
            <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
                @ {new Date().getFullYear()}. Jim-One Motor All right reserved.
            </div>
        </footer>
      
    );
}

export default Footer;