const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    screenshotsFolder: "cypress/mochawesomeresults/assets/images/",
    video: true,
    videosFolder: "cypress/mochawesomeresults/assets/videos/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir:'cypress/mochawesomeresults',
      reportFilename: 'Saucedemo-report',
      reportPageTitle: 'Cypress-Web-Saucedemo',
      overwrite: false,
      html: true,
      json: true
    },
  },
});