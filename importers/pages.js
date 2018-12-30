const { parseMarkdownDirectory } = require('nuxt-gustave/lib/markdown')
const { saveToJsonDir } = require('nuxt-gustave/lib/helpers')

exports.importer = () => {
  const type = 'pages'
  const result = parseMarkdownDirectory(`content/${type}`)
  saveToJsonDir(`${type}.json`, result)
  return {
    routes: result.data.map(node => `/${type}/${node.data.$slug}`)
  }
}
