// pages/api/favorites/[id].ts
import { getSession } from "next-auth/react";
import { prisma } from "../../../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session?.user?.email) return res.status(401).end();

  const user = await prisma.user.findUnique({ where: { email: session.user.email }});
  if (!user) return res.status(401).end();

  const id = req.query.id as string;

  if (req.method === "DELETE") {
    await prisma.favoriteSong.deleteMany({ where: { id, userId: user.id }});
    return res.status(204).end();
  }

  res.setHeader("Allow", ["DELETE"]);
  res.status(405).end();
}
