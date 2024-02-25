import { building, dev } from "$app/environment";
import {  type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (dev && !event.platform) {

    const mf = await import('./lib/server/miniflare');
    event.platform = await mf.setupPlatform();

    console.log(event.platform)
  }


  if (!building) {

  }
  return await resolve(event);
}

