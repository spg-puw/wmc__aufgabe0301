import { defineConfig } from "cypress";

export default defineConfig({
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: 'http://localhost:3000/',
    specPattern: '*.test.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
});
