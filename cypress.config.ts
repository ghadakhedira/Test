import { defineConfig } from "cypress";
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      await allureWriter(on, config);
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.homagames.com/",
    chromeWebSecurity: false,
  },
});
