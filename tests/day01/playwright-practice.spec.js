import { test } from '@playwright/test';

test('Google test', async ({ page }) => {
  //navigate to google
  await page.goto("https://www.google.com");
  //wait for 2 seconds
  
});