"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import{ FaPhone, FaBars } from 'react-icons/fa';


const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
const toggleMobileMenu = () => {
    setIsMobileMenuOpen
(!isMobileMenuOpen);
  };




  return (
    <nav className="bg-white shadow-md border-t-4 border-primary-500 sticky top-0 p-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" passHref className="flex items-center text-white">
              <Image
                src="/img/afri-trans-logo.png"
                alt="Afri Logistic"
                width={248}
                height={100}
                className="mr-2"s
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                passHref
                className="text-gray-800 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
              passHref
                href="/about"
                className="text-gray-800 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
              passHref
                href="/services"
                className="text-gray-800 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
              passHref
                href="/contact"
                className="text-gray-800 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <h4 className="text-success-500 flex items-center">
               <FaPhone className="text-5xl p-3 text-success" />
                +25377497925
              </h4>
            </div>
          </div>
           <div className="-mr-2 flex md:hidden"
>
            {
/* Mobile menu button */
}
            <FaBars
              className="text-4xl p-3 text-primary-500 cursor-pointer"

              onClick={toggleMobileMenu}
            />
          </div>
        </div>
        {
/* Mobile menu items */
}
       
       
       
       
        {isMobileMenuOpen && (
          <div className=
"md:hidden bg-white"
>
            <Link href=
"/"
 className=
"block py-2 px-4 text-gray-800 hover:text-primary-500"
>
              Home
            </Link>
            <Link href=
"/about"
 className=
"block py-2 px-4 text-gray-800 hover:text-primary-500"
>
              About
            </Link>
            <Link href=
"/services"
 className=
"block py-2 px-4 text-gray-800 hover:text-primary-500"
>
              Services
            </Link>
            <Link href=
"/contact"
 className=
"block py-2 px-4 text-gray-800 hover:text-primary-500"
>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
export
 
default Navbar;