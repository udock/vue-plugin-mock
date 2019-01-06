module.exports = {
  external: (id) => /^(@udock\/plugin-mock)$/.test(id),
  globals: {
    '@udock/plugin-mock': 'udock.plugin.mock'
  }
}
