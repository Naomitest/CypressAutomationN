const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pucyfn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/Earna.js'
  },
});
