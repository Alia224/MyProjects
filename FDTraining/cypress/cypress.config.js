const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // node event listeners
    },
    specPattern: "cypress/e2e/**/*.spec.js", // <-- make sure this matches your folder
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
  },
});
