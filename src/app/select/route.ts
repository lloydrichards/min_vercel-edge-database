import { db } from "@/lib/db";

export const revalidate = 0;

export async function GET() {
  const data = await db.execute(`SELECT * FROM messages`);
  return Response.json({ data });
}
