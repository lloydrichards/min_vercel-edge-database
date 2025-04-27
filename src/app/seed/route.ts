import { dbBroke } from "@/lib/db-broke";

export const revalidate = 0;

export async function GET() {
  await dbBroke.execute(
    `CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        message TEXT)`
  );
  await dbBroke.execute(
    `INSERT INTO messages (message) VALUES ('Bonjour, le monde!')`
  );
  return Response.json({ status: "ok", timestamp: new Date().toISOString() });
}
