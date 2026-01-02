import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const { name, email } = await request.json();

    const { rows } = await pool.query(
    'INSERT INTO users (name,email) VALUES ($1, $2) RETURNING *',
    [name,email]
  );

    return NextResponse.json(rows[0]);
}

export async function GET() {
  const { rows } = await pool.query("SELECT * FROM users");
  return NextResponse.json(rows);
}