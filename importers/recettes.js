const { parseMarkdownDirectory } = require('nuxt-gustave/lib/markdown')
const { saveToJsonDir } = require('nuxt-gustave/lib/helpers')

exports.importer = () => {
  const type = 'recettes'
  const result = parseMarkdownDirectory(`content/${type}`)
  result.data.forEach(node => {
    // des mots clefs qui pourront être utilisé par le moteur de recherche du site
    node.data.$search_keywords = [node.data.title]
    if (node.data.ingredients && node.data.ingredients.length > 0) {
      node.data.$search_keywords.push(...node.data.ingredients.map(i => i.name))
    }
  })
  saveToJsonDir(`${type}.json`, result)
  return {
    routes: result.data.map(node => `/${type}/${node.data.$slug}`)
  }
}
