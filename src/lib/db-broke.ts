import { createClient, type Client } from "@libsql/client";
import path from "path";

const globalForDb = globalThis as unknown as { client: Client | undefined };

const initClient = () => {
  const dbPath = path.join(process.cwd(), "database-broke", "db.sqlite");

  return globalForDb.client ?? createClient({ url: `file:${dbPath}` });
};

export const dbBroke = initClient();
