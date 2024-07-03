import Link from 'next/link';
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin,FaMapMarkerAlt,FaEnvelope,FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white pt-20 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Carita 1 T19779 Office K91 Djibouti
            </p>
            <p className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" />
              +25377497925
            </p>
            <p className="mb-2 flex items-center">
              <FaEnvelope className="mr-2" />
              info@afridj.com
            </p>
            <div className="flex mt-4">
              <Link href="#" className="mr-4">
                <FaTwitter className="text-white hover:text-primary-500 transition-colors duration-300" size={20} />
              </Link>
              <Link href="#" className="mr-4">
                <FaFacebook className="text-white hover:text-primary-500 transition-colors duration-300" size={20} />
              </Link>
              <Link href="#" className="mr-4">
                <FaYoutube className="text-white hover:text-primary-500 transition-colors duration-300" size={20} />
              </Link>
              <Link href="#">
                <FaLinkedin className="text-white hover:text-primary-500 transition-colors duration-300" size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Air Freight
            </Link>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Sea Freight
            </Link>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Road Freight
            </Link>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Logistic Solutions
            </Link>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Industry solutions
            </Link>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              About Us
            </Link>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Contact Us
            </Link>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Our Services
            </Link>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Terms & Condition
            </Link>
            <Link href="#" className="block mb-2 hover:text-primary-500 transition-colors duration-300">
              Support
            </Link>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Your email"
                className="form-input w-full text-black py-3 pl-4 pr-20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-success py-2 px-4 rounded-md absolute top-0 right-0 mt-1 mr-2 hover:bg-primary-600 transition-colors duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            &copy; <Link href="#" className="hover:text-primary-500 transition-colors duration-300">Afri General Trading Co</Link>, All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;