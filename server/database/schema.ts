import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { user } from "./auth-schema";

export * from "./auth-schema";

export const links = sqliteTable(
  "links",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    slug: text("slug").notNull().unique(),
    target: text("target").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    clickCount: integer("click_count").notNull().default(0),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .notNull()
      .default(sql`(unixepoch() * 1000)`),
  },
  (table) => [index("links_user_id_idx").on(table.userId)],
);

export type Link = typeof links.$inferSelect;
export type NewLink = typeof links.$inferInsert;
