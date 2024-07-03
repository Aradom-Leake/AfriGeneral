import ContactsList from '../ContactsList';
import clientPromise from "@/lib/mongodb";
import { notFound } from 'next/navigation';

const CONTACTS_PER_PAGE = 10;

async function getContacts(page = 1) {
  try {
    const client = await clientPromise;
    const db = client.db("afridb");
    const skip = (page - 1) * CONTACTS_PER_PAGE;
    const contacts = await db.collection("contacts")
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(CONTACTS_PER_PAGE)
      .toArray();
    
    const total = await db.collection("contacts").countDocuments();
    const totalPages = Math.ceil(total / CONTACTS_PER_PAGE);

    return { contacts, totalPages, currentPage: page };
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    throw new Error(`Failed to fetch contacts: ${error.message}`);
  }
}

export default async function ContactsDashboard({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  
  try {
    const { contacts, totalPages, currentPage } = await getContacts(page);

    if (contacts.length === 0 && page !== 1) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <ContactsList contacts={contacts} />
        <div className="mt-8 flex justify-center">
          {currentPage > 1 && (
            <a href={`/contacts-dashboard?page=${currentPage - 1}`} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
              Previous
            </a>
          )}
          {currentPage < totalPages && (
            <a href={`/contacts-dashboard?page=${currentPage + 1}`} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
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
    console.error("Contacts Dashboard error:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">Error loading contacts: {error.message}</p>
      </div>
    );
  }
}

// The ContactsList component can be similar to the QuotesList component with necessary adjustments for the fields.
