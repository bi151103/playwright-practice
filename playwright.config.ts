import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Chạy tất cả các test song song */
  fullyParallel: true,
  /* Bật 3 workers để chạy song song 3 trình duyệt */
  workers: 3, 
  
  /* Cấu hình 3 trình duyệt tại đây */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});