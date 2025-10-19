import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
// import { authOptions } from "../auth/[...nextauth]/route"; // ✅ adjust path if needed

// GET: fetch favorites
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const favs = await prisma.favoriteSong.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(favs);
}

// POST: create new favorite
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { title } = await req.json();

  if (!title) {
    return NextResponse.json({ error: "Missing title" }, { status: 400 });
  }

  const created = await prisma.favoriteSong.create({
    data: { title, userId: user.id },
  });

  return NextResponse.json(created, { status: 201 });
}
