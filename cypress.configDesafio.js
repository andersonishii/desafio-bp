const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    fileServerFolder: "./",
    supportFile: "./cypress/support.js",
    specPattern: './tests/E2E/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
