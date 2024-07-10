import { Suspense } from 'react';
import QuotesList from './QuotesList';
import clientPromise from "@/lib/mongodb";
import { notFound } from 'next/navigation';
import SearchForm from './SearchForm';
import Link from 'next/link';

const QUOTES_PER_PAGE = 6;

async function getQuotes(page = 1, search = '') {
  try {
    const client = await clientPromise;
    const db = client.db("afridb");
    const skip = (page - 1) * QUOTES_PER_PAGE;

    let query = {};
    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { freight: { $regex: search, $options: 'i' } },
          { note: { $regex: search, $options: 'i' } }
        ]
      };
    }

    const quotes = await db.collection("quotes")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(QUOTES_PER_PAGE)
      .toArray();

    const total = await db.collection("quotes").countDocuments(query);
    const totalPages = Math.ceil(total / QUOTES_PER_PAGE);

    return { quotes, totalPages, currentPage: page, total };
  } catch (error) {
    console.error("Failed to fetch quotes:", error);
    throw new Error(`Failed to fetch quotes: ${error.message}`);
  }
}

export default async function QuotesPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || '';

  try {
    const { quotes, totalPages, currentPage, total } = await getQuotes(page, search);

    if (quotes.length === 0 && page !== 1) {
      notFound();
    }

    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Quotes</h2>
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchForm initialSearch={search} />
        </Suspense>
        <p className="mt-4 mb-4">Total quotes: {total}</p>
        <QuotesList quotes={quotes} />
        <div className="mt-8 flex justify-center">
          {currentPage > 1 && (
            <Link href={`/dashboard/quotes?page=${currentPage - 1}${search ? `&search=${search}` : ''}`} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
              Previous
            </Link>
          )}
          {currentPage < totalPages && (
            <Link href={`/dashboard/quotes?page=${currentPage + 1}${search ? `&search=${search}` : ''}`} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
              Next
            </Link>
          )}
        </div>
        <p className="text-center mt-4">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    );
  } catch (error) {
    console.error("Quotes page error:", error);
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Quotes</h2>
        <p className="text-red-500">Error loading quotes: {error.message}</p>
      </div>
    );
  }
}