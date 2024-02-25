import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { uuidv7 } from "uuidv7";

export const entry = sqliteTable('entry', {
  id: text('id').primaryKey().$defaultFn(() => uuidv7()),
  userID: text('userID').notNull(),
  number: integer('number').notNull(),
  text: text('text').notNull()
})

