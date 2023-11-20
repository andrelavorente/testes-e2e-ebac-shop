const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7h2vfc',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {},
    video: true,
  },
});
