"use client";

import { useState } from 'react';
import openMenu from '../../../public/assets/openMenu1.png';
import Image from 'next/image';
import closeMenu from '../../../public/assets/close_menu.png';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    //shadow-md
    <nav className="bg-white shadow-[-1px_-10px_20px_#7c3aed] fixed w-full z-10 top-0"> 
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-violet-600 text-2xl">
        <Link href="/">
            Chatter📚
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg> */}
            {!isOpen ? <Image src={openMenu} alt='open menu' width={20} /> : <Image src={closeMenu} alt='open menu' width={20} /> }
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/login" className="block mt-2 md:mt-0 md:ml-4 text-violet-600 hover:text-gray-700">Log In</Link>
          <Link href="/register" className="block mt-2 md:mt-0 md:ml-4 text-violet-600 hover:text-gray-700">Register</Link>
          <Link href="/blogs" className="block mt-2 md:mt-0 md:ml-4 text-violet-600 hover:text-gray-700">Blogs</Link>
          {/* <a href="#" className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700">Contact</a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;












































// // import "../../app/globals.css";
// import Link from "next/link";


// export default function Navbar() {
//   return (
//     <>
//       <nav className="w-full py-8 border-b border-b-violet-900">
//         <div className="container flex justify-between items-center mx-auto sm:px-6 px-8">
//           <Link href="/" className="font-bold text-violet-600 text-2xl">
//             Chatter📚
//           </Link>

//           <div className="hidden">
//             <div className="flex justify-between text-white text-sm">
//               <Link
//                 href="/login"
//                 className="bg-violet-600 rounded hover:bg-violet-400 py-2 px-4"
//               >
//                 Log In
//               </Link>

//               <Link
//                 href="/register"
//                 className="ml-8 bg-violet-600 rounded hover:bg-violet-400 py-2 px-4"
//               >
//                 Register
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
