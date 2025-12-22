/**
 * Cloudflare Worker - Dashboard Site
 */

export default {
  async fetch(request, env, ctx) {
    return new Response('Hello from Dashboard!', {
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}
