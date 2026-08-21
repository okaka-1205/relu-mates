// Cloudflare Worker entrypoint used by the Sites deployment package.
// Static React assets are served by the platform-provided ASSETS binding.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request)
  },
}
