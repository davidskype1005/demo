// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-swiper'],
    css: ['@fortawesome/fontawesome-svg-core/styles.css'],
    build: { transpile: ['@fortawesome/vue-fontawesome']},
})
