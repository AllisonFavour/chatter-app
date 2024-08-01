"use client";

import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-700">
          <a href="#" className="text-gray-800 hover:text-gray-700">
            Brand
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <div
              className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform ${
                isOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-800 my-1 transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform ${
                isOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
        <div
          className={`md:flex items-center ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <a
            href="#"
            className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700"
          >
            About
          </a>
          <a
            href="#"
            className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-gray-700"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// import React, { useState } from "react";

// export const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };
//   console.log(isOpen);

//   return (
//     <div>
//       <div>
//         <h1>menu</h1>
//       </div>

//       <button
//         onClick={handleClick}
//         className="flex flex-col justify-center items-center"
//       >
//         <span
//           className={`bg-red-500 block transition-all duration-300 ease-out
//                     h-0.5 w-6 rounded-sm ${
//                       isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
//                     }`}
//         ></span>
//         <span
//           className={`bg-red-500 block transition-all duration-300 ease-out
//             h-0.5 w-6 rounded-sm ${
//               isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
//             }`}
//         ></span>
//         <span
//           className={`bg-red-500 block transition-all duration-300 ease-out
//             h-0.5 w-6 rounded-sm ${
//               isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
//             }`}
//         ></span>
//       </button>
//     </div>
//   );
// };
