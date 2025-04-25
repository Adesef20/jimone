import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai"
import { FaFacebook, } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = ()=>{
    return(
        <footer className="bg-gray-900 w-full py-10 px-4 text-white">

            <div className="text-center">
                <h1 className="text-3xl font-bold text-amber-500">Jim-One Motors</h1>
                <p className="mt-1 text-sm">Your trusted partner in quality cars</p>
            </div>

            {/* Quick Link */}

            <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">
              <div>
                <h3 className="text-amber-500 text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-2 text-sm ">
                    <li><Link href="/" className="hover:text-amber-400 cursor-pointer">home</Link></li>
                    <li><Link href="/About" className="hover:text-amber-400 cursor-pointer">about</Link></li>
                    <li><Link href="/Service" className="hover:text-amber-400">service</Link></li>
                    <li><Link href="/Faq" className="hover:text-amber-400">faq</Link></li>
                    <li><Link href="/Contact" className="hover:text-amber-400">contact</Link></li>
                </ul>
              </div>
                      {/* Contact Info  */}
              <div>
              <h2 className=" text-lg text-center font-semibold text-amber-500 mt-2">Contact Us</h2>
                 <div className="flex items-center justify-center gap-2">
                 <FaPhoneAlt className="text-white text-xl"/>
                 <span className="text-gray-300">+2347039406230</span>
                 </div>
                 <div className="flex items-center justify-center gap-2">
                 <FaInfo className="text-white text-xl"/>
                 <span className="text-gray-300">info@jimonemotors</span>
                 </div>
                 <div className="flex items-center justify-center gap-2">
                 <FaAddressBook className="text-white text-xl" />
                 <span className="text-gray-300">1, Wole-Ola Compound Beside Slot <br /> Ogo-Oluwa Oshogbo, Osun State.</span>
                 </div>
              </div>
                 
                 {/* Social Medial  */}

                 <div className="text-center md:text-right">
                <h2 className="text-lg font-semibold text-amber-500 mb-2">Follow Us</h2>

               <div className="flex justify-center md:justify-end gap-4 text-xl">
                    <Link href="https://web.facebook.com/adebisi.sefiuayanshina" target="_blank" className="hover:text-amber-400"><FaFacebook /></Link>
                    <Link href="#" className="hover:text-amber-400"> <FaSquareXTwitter /></Link>
                    <Link href="#" className="hover:text-amber-400"><AiFillTikTok /></Link>
                    <Link href="#" className="hover:text-amber-400"><FaInstagramSquare /></Link>
                </div>
            </div>
            </div>
            
            {/* Footer Bottom */}
            
            <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
                @ {new Date().getFullYear()}. Jim-One Motor All right reserved.
            </div>
        </footer>
      
    );
}

export default Footer;