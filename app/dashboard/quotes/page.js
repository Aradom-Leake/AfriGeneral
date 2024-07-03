import QuotesList from '../QuotesList';
import clientPromise from "@/lib/mongodb";
import { notFound } from 'next/navigation';

const QUOTES_PER_PAGE = 10;

async function getQuotes(page = 1) {
  try {
    const client = await clientPromise;
    const db = client.db("afridb");
    const skip = (page - 1) * QUOTES_PER_PAGE;
    const quotes = await db.collection("quotes")
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(QUOTES_PER_PAGE)
      .toArray();
    
    const total = await db.collection("quotes").countDocuments();
    const totalPages = Math.ceil(total / QUOTES_PER_PAGE);

    return { quotes, totalPages, currentPage: page };
  } catch (error) {
    console.error("Failed to fetch quotes:", error);
    throw new Error(`Failed to fetch quotes: ${error.message}`);
  }
}

export default async function Dashboard({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  
  try {
    const { quotes, totalPages, currentPage } = await getQuotes(page);

    if (quotes.length === 0 && page !== 1) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8">
       
        <QuotesList quotes={quotes} />
        <div className="mt-8 flex justify-center">
          {currentPage > 1 && (
            <a href={`/dashboard?page=${currentPage - 1}`} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
              Previous
            </a>
          )}
          {currentPage < totalPages && (
            <a href={`/dashboard?page=${currentPage + 1}`} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
              Next
            </a>
          )}
        </div>
        <p className="text-center mt-4">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    );
  } catch (error) {
    console.error("Dashboard error:", error);
    return (
      <div className="container mx-auto px-4 py-8">
       
        <p className="text-red-500">Error loading quotes: {error.message}</p>
      </div>
    );
  }
}