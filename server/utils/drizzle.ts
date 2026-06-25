import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "../database/schema";

export { schema };
export const tables = schema;

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function useDb() {
  if (!_db) {
    const path = resolve(process.env.DATABASE_PATH || ".data/nuxtly.sqlite");
    mkdirSync(dirname(path), { recursive: true });
    const sqlite = new Database(path);
    sqlite.pragma("journal_mode = WAL");
    _db = drizzle(sqlite, { schema });
  }
  return _db;
}
