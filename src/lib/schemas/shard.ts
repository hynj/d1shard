import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { uuidv7 } from "uuidv7";


export const users = sqliteTable('users', {
  id: text('id').primaryKey().$defaultFn(() => uuidv7()),
  shard_id: integer('shard_id').notNull(),
  name: text('name').notNull()
})

