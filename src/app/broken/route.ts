import { dbBroke } from "@/lib/db-broke";

export const revalidate = 0;

export async function GET() {
  const data = await dbBroke.execute(`SELECT * FROM messages`);
  return Response.json({ data });
}
