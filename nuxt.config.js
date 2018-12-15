const pkg = require('./package')
import { generateRoutes } from './services/helpers'

const baseUrl = 'https://la-cantine-vegan.github.io'

// les informations pour les metatags à destination des réseaux sociaux
// pour l'aperçu quand on partage un lien.
const ogTitle = 'La cantine vegan'
const ogDescription = 'Des recette vegan sexy, exotiques et pas prise de tete pour tous les jours'
const ogImage = `${baseUrl}/images/popcorn-500.jpg`

module.exports = {
  env: {
    baseUrl: baseUrl,
    contactSlackWebhook: 'none'
  },
  mode: 'universal',
  generate: {
    routes: generateRoutes()
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Trouvez un développeur freelance à Nantes, avec (vraiment) 0% de commission pour tout le monde'
      },
      // open graph
      { hid: 'og:site_name', name: 'og:site_name', content: 'Popcorn' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: ogTitle
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ogImage
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: ogDescription
      },
      // twitter card:
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: ogTitle
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: ogDescription
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: ogImage
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma.min.css' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-lazyload', 'plugins/vue-router-sync'],

  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
