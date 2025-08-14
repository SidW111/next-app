import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
const prismaClient = new PrismaClient();
export async function POST(req: NextRequest) {
  const data = await req.json();
  await prismaClient.user.create({
    data: { username: data.username, password: data.password },
  });
  console.log(data);
  return NextResponse.json({
    message: "User sign up successful",
  });
}
