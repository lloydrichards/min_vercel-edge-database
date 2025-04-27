import { db } from "@/lib/db";

export const revalidate = 0;

export async function GET() {
  await db.execute(
    `CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        message TEXT)`
  );
  await db.execute(`INSERT INTO messages (message) VALUES ('Hello, world!')`);
  return Response.json({ status: "ok", timestamp: new Date().toISOString() });
}
