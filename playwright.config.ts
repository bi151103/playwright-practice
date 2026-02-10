import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

export default defineConfig(
  {
    tsconfig: './tsconfig.json',

    fullyParallel: true,//if true, all the tests within a test file or suite will run in parallel
    //we cannot determine the order of files running in parallel
    retries: process.env.CI ? 2 : undefined,
    reporter: 'html',
    workers: process.env.CI ?? 10,

    //timeout
    globalTimeout: 30 * 60 * 60,//30m, default none
    expect: {
      timeout: 0//default 5
    },
    timeout: 90 * 1000,//90s, default 30

    //common option for all tests
    use: {
      actionTimeout: 0,//default none
      navigationTimeout: 0,// default none
      baseURL: process.env.BASE_URL,
      trace: 'on-first-retry',
      serviceWorkers: 'block'//for data intercepting
    },

    //project-specific config
    projects: [
      {
        name: 'setup-project',
        dependencies: [],
        grep: [],
        grepInvert: [],
        testMatch: [],
        testIgnore: [],
        use: devices['iPhone 15']
      },
      {
        name: 'playwright-practice',
        dependencies: ['setup-project'],
        grep: [],
        grepInvert: [],
        testMatch: [],
        testIgnore: [],
        use: {
          ...devices['iPhone 15'],
          storageState: 'playwright-practice-storageState.json'
        }
      }
    ]
  }
); 