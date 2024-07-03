'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaChartBar, FaQuoteRight, FaAddressBook, FaBoxes, FaTruck } from 'react-icons/fa';

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: FaChartBar },
  { name: 'Quotes', href: '/dashboard/quotes', icon: FaQuoteRight },
  { name: 'Contacts', href: '/dashboard/contacts', icon: FaAddressBook },
//   { name: 'Inventory', href: '/dashboard/inventory', icon: FaBoxes },
  { name: 'Shipments', href: '/dashboard/shipments', icon: FaTruck },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${isSidebarOpen ? '' : 'hidden'}`}>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link href={item.href} className={`flex items-center p-2 rounded hover:bg-gray-700 ${pathname === item.href ? 'bg-gray-700' : ''}`}>
                  <item.icon className="mr-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
              {isSidebarOpen ? 'Close' : 'Open'} Sidebar
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}