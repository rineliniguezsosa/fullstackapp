import { NextResponse } from "next/server";

export async function POST(request:Request){
    const { name, email } = await request.json();
  return NextResponse.json({msj:"Aqui obtengo los usuarios"});
}