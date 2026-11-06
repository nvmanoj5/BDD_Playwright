
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { Config } from './utils/config';

// BDD configuration
const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'src/steps/*.ts',
  importTestFrom: 'src/fixtures/bdd-fixtures.ts',
});

export default defineConfig({

  // BDD generated test directory
  testDir,
  
  timeout: 60000,
  // Execute tests in parallel
  fullyParallel: true,

  // Number of workers
  workers: process.env.CI ? 1 : undefined,

  // Test reporters
  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: 'playwright-report',
        open: 'never',
      },
    ],
    [
      'allure-playwright',
      {
        outputFolder: 'allure-results',
      },
    ],
  ],

  // Common test settings
  use: {
    baseURL: Config.baseUrl,

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',
  },

  // Browser configuration
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],
});
