'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm({ initialSearch = '' }) {
  const [search, setSearch] = useState(initialSearch);
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      router.push(`/dashboard/quotes?search=${encodeURIComponent(search)}`, undefined, { shallow: true });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/dashboard/quotes?search=${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Quotes..."
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-success"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-success text-white rounded-r-md hover:bg-success focus:outline-none focus:ring-2 focus:ring-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}