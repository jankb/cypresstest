const { defineConfig } = require('cypress')

module.exports = defineConfig({
e2e: {
  baseUrl: 'https://proveta.sample-dev.mattilsynet.io/tasks',
  specPattern: 'cypress/e2e/**/*.cy.js',
},
})

