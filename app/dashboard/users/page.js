"use client"
import React, { useEffect, useState } from 'react';

const usersTable = () => {
  const [users, setusers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchusers = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/auth/register?page=${page}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setusers(data.users);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchusers(currentPage);
  }, [currentPage]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2 ">Email</th>
            <th className="border p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index)=> (
            <tr key={user._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <span className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default usersTable;
