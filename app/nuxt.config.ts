// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@hebilicious/authjs-nuxt"
  ],
  vite: {
    optimizeDeps: {
      include: [
        'cookie'
      ]
    }
  },
  eslint: {
    lintOnStart: false
  },
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET // You can generate one with `openssl rand -base64 32`
    },
    discord: {
      clientId: process.env.NUXT_NEXTAUTH_DISCORD_CLIENT_ID,
      clientSecret: process.env.NUXT_NEXTAUTH_DISCORD_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    }
  }
})