import { test } from '@playwright/test';

// Dòng này CỰC KỲ QUAN TRỌNG: Ép các test trong file này chạy song song cùng lúc
test.describe.configure({ mode: 'parallel' });

// Worker 1 sẽ lo test này
test('Worker 1 - Treo tiến trình 1', async ({ page }) => {
  await page.setContent(`<button>Nút 1</button>`);
  console.log('Worker 1 đang chạy...');
  await page.waitForTimeout(1000000); 
});

// Worker 2 sẽ lo test này
test('Worker 2 - Treo tiến trình 2', async ({ page }) => {
  await page.setContent(`<button>Nút 2</button>`);
  console.log('Worker 2 đang chạy...');
  await page.waitForTimeout(1000000);
});

// Worker 3 sẽ lo test này
test('Worker 3 - Treo tiến trình 3', async ({ page }) => {
  await page.setContent(`<button>Nút 3</button>`);
  console.log('Worker 3 đang chạy...');
  await page.waitForTimeout(1000000);
});