import { entry } from "$lib/schemas/entry"
import { createDrizzle } from "$lib/server/drizzle"
import { error } from '@sveltejs/kit';

const text = "This is a long string to be used for a bit of data to add to make the row bigger  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

export const load = (async ({ platform, params, request, url }) => {
  console.log(params.inc);
  const user = url.searchParams.get('user');
  console.log(user);
  const drizzle = createDrizzle(platform.env, Number(params.inc))    
  
  const insertedRow = await drizzle.insert(entry).values({
    userID: user,
number: Number(params.inc),
    text: text
  })

  if (!insertedRow.success) error(500, {message: "unable to insert row"}) 

  console.log(insertedRow)
  
})
