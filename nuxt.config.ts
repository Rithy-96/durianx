// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },

  modules: ['@pinia/nuxt'],
  ssr: false, // disable SSR (important for GitHub Pages)
  app: {
    baseURL: '/durianx/', // VERY IMPORTANT
  }

})
