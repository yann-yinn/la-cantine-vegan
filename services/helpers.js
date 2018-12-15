import recettes from '../static/api/recettes.json'
import pages from '../static/api/pages.json'

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle(array) {
  const a = [...array]
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

export function generateRoutes() {
  const routes = [
    ...recettes.map(r => `/recette/${r.slug}`),
    ...pages.map(r => `/page/${r.slug}`)
  ]
  return routes
}
