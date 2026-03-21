import { test } from '@playwright/test';

test('Simple google test @wip', async ({ page }) => {

  //test code goes here
  await page.goto("https://www.google.com");
  

  let searchBox = page.locator("//textarea[@id='APjFqb' and @name='q']");
  await searchBox.fill("Playwright");
  
  await searchBox.press("Enter");
  


});