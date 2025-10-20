import { NextResponse } from "next/server";
import { prisma as prismaClient } from "@/../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/../lib/auth";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = await context;
  const id = (await params).id;

  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prismaClient().user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const favorite = await prismaClient().favoriteSong.findUnique({
    where: { id },
  });

  if (!favorite || favorite.userId !== user.id) {
    return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });
  }

  await prismaClient().favoriteSong.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Favorite deleted successfully" });
}
