import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    const client = await clientPromise;
    const db = client.db("afridb");

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "User registered successfully", userId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "An error occurred during registration" }, { status: 500 });
  }
}
export async function GET() {
    try {
      const client = await clientPromise;
      const db = client.db("afridb");
      const users = await db.collection("users").find({}).toArray();
      return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
      console.log("error fetching data", error);
      return NextResponse.json(
        {
          message: "error fetching users",
          error: error.message,
        },
        { status: 500 }
      );
    }
  }