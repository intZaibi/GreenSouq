import { NextResponse } from "next/server";
import { prisma as prismaClient } from "@/../lib/prisma";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existing = await prismaClient().user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "User exists" }, { status: 400 });
    }

    const hashed = await hash(password, 10);
    const user = await prismaClient().user.create({
      data: { name, email, password: hashed },
    });

    return NextResponse.json({ id: user.id, email: user.email }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
