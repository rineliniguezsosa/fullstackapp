import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const result = await pool.query(
        "SELECT COUNT(*) AS total_users FROM users"
    );

    return NextResponse.json({totalusers:result.rows[0].total_users})
}