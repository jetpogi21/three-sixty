//Generated by GenerateModelSyncRoute
import { NextResponse } from "next/server";
import { PasswordTokenSync } from "../../../../models/PasswordTokenModel";

export async function GET(request: Request) {
  await PasswordTokenSync();
  return NextResponse.json({ data: "success" });
}