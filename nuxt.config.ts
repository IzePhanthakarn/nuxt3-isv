// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxtjs/google-fonts'],
   colorMode: {
      preference: 'light', // default theme
      dataValue: 'theme', // activate data-theme in <html> tag
      // classSuffix: "" // use darkmode in class attribute
   },
   css: [
      '@/assets/css/main.css'
   ],
   googleFonts: {
      // download: true,
      // base64: false,
      fontsPath: '~assets/fonts'
    },
})
