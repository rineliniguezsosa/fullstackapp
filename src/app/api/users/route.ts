import { NextResponse } from "next/server";

export async function GET(){
  return NextResponse.json({msj:"Aqui obtengo los usuarios"});
}