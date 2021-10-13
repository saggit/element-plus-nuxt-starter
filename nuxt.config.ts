import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    'assets/scss/index.scss'
  ],
  plugins: [
    {
      src: '~/plugins/element-plus', mode: 'client'
    }
  ]
})