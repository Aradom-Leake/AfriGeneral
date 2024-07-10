"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaPhone, FaBars } from 'react-icons/fa';

const UserProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Redirect to home page or login page
    window.location.href = '/';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src={user.avatar || '/default-avatar.png'}
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
        <span>{user.name}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/quote" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Get Quote
          </Link>
          <Link href="/my-quotes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            My Quotes
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch(error => console.error('Error fetching user data:', error));
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
                className="mr-2"
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
              {user ? (
                <UserProfileDropdown user={user} />
              ) : (
                <Link
                  href="/login"
                  className="text-gray-800 bg-primary-500 hover:bg-primary-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
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
          <div className="-mr-2 flex md:hidden">
            <FaBars
              className="text-4xl p-3 text-primary-500 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <Link href="/"
              className="block py-2 px-4 text-gray-800 hover:text-primary-500"
            >
              Home
            </Link>
            <Link href="/about"
              className="block py-2 px-4 text-gray-800 hover:text-primary-500"
            >
              About
            </Link>
            <Link href="/services"
              className="block py-2 px-4 text-gray-800 hover:text-primary-500"
            >
              Services
            </Link>
            <Link href="/contact"
              className="block py-2 px-4 text-gray-800 hover:text-primary-500"
            >
              Contact
            </Link>
            {user ? (
                <UserProfileDropdown user={user} />
              ) : (
                <Link
                  href="/login"
                  className="text-gray-800 bg-primary-500 hover:bg-primary-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;