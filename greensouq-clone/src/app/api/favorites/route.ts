// pages/api/favorites/index.ts
import { getSession } from "next-auth/react";
import { prisma } from "../../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session?.user?.email) return res.status(401).end();

  const user = await prisma.user.findUnique({ where: { email: session.user.email }});
  if (!user) return res.status(401).end();

  if (req.method === "GET") {
    const favs = await prisma.favoriteSong.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" }});
    return res.json(favs);
  }

  if (req.method === "POST") {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "missing title" });
    const created = await prisma.favoriteSong.create({ data: { title, userId: user.id }});
    return res.status(201).json(created);
  }

  res.setHeader("Allow", ["GET","POST"]);
  res.status(405).end();
}
