import { test } from '@playwright/test';

test('', async ({ page }) => {

  //test code goes here
  await page.goto("https://www.google.com");
  await page.waitForTimeout(2000);

  let searchBox = page.locator("//textarea[@id='APjFqb' and @name='q']");
  searchBox.fill("Playwright");
  
  await searchBox.press("Enter");
  await page.waitForTimeout(2000);
  


});