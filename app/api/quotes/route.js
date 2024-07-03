import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("afridb");

    console.log("Accessing MongoDB for quote submission");

    const body = await request.json();
    const { name, email, mobile, freight, note } = body;

    // Validate the input
    if (!name || !email || !mobile || !freight) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert the quote request into MongoDB
    const result = await db.collection("quotes").insertOne({
      name,
      email,
      mobile,
      freight,
      note,
      createdAt: new Date(),
    });

    console.log("Quote request saved with ID:", result.insertedId, {
      name,
      email,
      mobile,
      freight,
      note,
    });

    return NextResponse.json(
      { message: "Quote request received and saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    // if (error.code) console.error("Error code:", error.code);
    // if (error.codeName) console.error("Error codeName:", error.codeName);
    // if (error.errorLabels) console.error("Error labels:", error.errorLabels);
    return NextResponse.json(
      { message: "Error processing quote request", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("afridb");
    const quotes = await db.collection("quotes").find({}).toArray();
    return NextResponse.json({ quotes }, { status: 200 });
  } catch (error) {
    console.log("error fetching data", error);
    return NextResponse.json(
      {
        message: "error fetching quotes",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
