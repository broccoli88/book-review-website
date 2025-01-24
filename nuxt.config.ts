import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     compatibilityDate: "2024-11-01",
     devtools: { enabled: true },
     css: ["~/assets/css/main.css"],

     vite: {
          plugins: [tailwindcss()],
     },

     modules: [
          "@nuxtjs/supabase",
          "@nuxt/icon",
          "@nuxt/image",
          "@vee-validate/nuxt",
     ],

     supabase: {
          url: process.env.SUPABASE_URL,
          key: process.env.SUPABASE_KEY,
          redirectOptions: {
               login: "/admin/login",
               include: ["/admin(/.*)?"],
          },
          cookieOptions: {
               maxAge: 60 * 60 * 8,
               sameSite: "lax",
               secure: true,
          },
     },
});
