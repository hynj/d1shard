import { entry } from "$lib/schemas/entry";
import { createDrizzle } from "$lib/server/drizzle"
import { error } from "@sveltejs/kit";

export const load = (async ({ platform, slug, url, request }) => {
 const shard = Number(url.searchParams.get('shard'));

  const drizzle = createDrizzle(platform.env, shard);

  const result = await drizzle.select().from(entry);

  if (!result?.length) error(500, "no results");

  return {
    count: result 
  }
})
