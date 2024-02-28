const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com",
    fileServerFolder: "./",
    supportFile: "./cypress/support.js",
    specPattern: './tests/API/*.{cy,*}.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
