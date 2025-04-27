import { createClient, type Client } from "@libsql/client";
import { readdirSync } from "fs";
import path from "path";

const globalForDb = globalThis as unknown as { client: Client | undefined };

const initClient = () => {
  const dbPath = path.join(process.cwd(), "database", "db.sqlite");
  const exists = readdirSync(path.join(process.cwd(), "database"));
  if (!exists) {
    throw new Error(`Database file "db.sqlite" does not exist`);
  }
  return globalForDb.client ?? createClient({ url: `file:${dbPath}` });
};

export const db = initClient();
