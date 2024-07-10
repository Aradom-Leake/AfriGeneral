import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("afridb");
    const quotes = await db.collection("contacts").find({}).toArray();
    return NextResponse.json({ quotes }, { status: 200 });
  } catch (error) {
    console.log("error fetching data", error);
    return NextResponse.json(
      {
        message: "error fetching contacts",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

//handle post
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("afridb");
    console.log("Accessing MongoDB for contact form submission");

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert the contact data into db
    const result = await db.collection("contacts").insertOne({
      name,
      email,
      subject,
      message,
      sentAt: new Date(),
    });

    console.log("Contact sent with id", result.insertedId, {
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: "Data successfully sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error posting data", error);
    return NextResponse.json(
      { message: "Error sending data", error: error.message },
      { status: 500 }
    );
  }
}
