// app/api/quotes/route.js
import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';
import { verifyToken } from '@/lib/auth';

export async function POST(request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const { name, email, mobile, freight, note } = await request.json();

    const client = await clientPromise;
    const db = client.db("afridb");

    const result = await db.collection("quotes").insertOne({
      userId: new ObjectId(decoded.userId),
      name,
      email,
      mobile,
      freight,
      note,
      createdAt: new Date()
    });

    return NextResponse.json({ message: "Quote submitted successfully", quoteId: result.insertedId.toString() }, { status: 201 });
  } catch (error) {
    console.error("Error submitting quote:", error);
    return NextResponse.json({ error: "An error occurred while submitting the quote" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("afridb");

    const quotes = await db.collection("quotes")
      .find({ userId: new ObjectId(decoded.userId) })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ quotes: quotes.map(quote => ({...quote, id: quote._id.toString()})) });
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return NextResponse.json({ error: "An error occurred while fetching quotes" }, { status: 500 });
  }
}