"use client"
import { useState } from 'react';
import { FaUser, FaEnvelope, FaTag , FaCalendar } from 'react-icons/fa';

function ContactItem({ contact }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;

  const toggleExpand = () => setExpanded(!expanded);

  const description = contact.message || '';
  const isLongDescription = description.length > maxLength;
  const displayDescription = expanded ? description : description.slice(0, maxLength);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <FaUser className="text-gray-500 mr-2" />
        <span className="font-semibold">{contact.name}</span>
      </div>
      <div className="flex items-center mb-2">
        <FaEnvelope className="text-gray-500 mr-2" />
        <span>{contact.email}</span>
      </div>
      <div className="flex items-center mb-2">
        <FaTag  className="text-gray-500 mr-2" />
        <span>{contact.subject}</span>
      </div>
      {/* <div className="flex items-center mt-2 text-sm text-gray-500">
        <FaCalendar className="mr-2" />
        <span>{new Date(contact.createdAt).toLocaleString()}</span>
      </div> */}
      {description && (
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            {displayDescription}
            {isLongDescription && !expanded && '...'}
          </p>
          {isLongDescription && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 text-sm mt-1 hover:underline"
            >
              {expanded ? 'See Less' : 'See More'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function ContactsList({ contacts }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-100 border-b">
        <h2 className="text-xl font-semibold">Recent Contacts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {contacts.map((contact) => (
          <ContactItem key={contact._id.toString()} contact={contact} />
        ))}
      </div>
    </div>
  );
}
