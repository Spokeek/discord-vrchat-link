import DiscordProvider from "@auth/core/providers/discord"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    DiscordProvider({
      clientId: runtimeConfig.discord.clientId,
      clientSecret: runtimeConfig.discord.clientSecret,
    })
  ],
  callbacks: {
    async jwt({ token }) {
      // Persist the OAuth access_token to the token right after signin
      return token
    },
    async session({ session, token }) {
      if(session.user && token.sub){
        session.user.id = token.sub
      }
      // Send properties to the client, like an access_token from a provider.
      return session
    },
    signIn({ profile }) {
      try {
        console.debug(profile)
        if(!profile) throw new Error("No profile returned")
        if(!profile.verified) throw new Error("Email not verified")

        return true
      }
      catch(e){
        console.error(e)
        return false
      }
    }
  }
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }