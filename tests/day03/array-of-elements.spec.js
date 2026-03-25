

import { test,expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");
  expect(page).toHaveTitle("Practice");
});

test.describe('Array of Elements', () => {
  test('Verify that there are exactly 50 link elements within the <ul> tag', async ({ page }) => {
    let allLinks = await page.locator("//ul[@class='list-group']/li/a").all();
    expect(allLinks.length).toBe(50);
  });

  test('Verify that each of the 50 link elements within <ul> tag is visible and clickable', async ({ page }) => {
    let allLinks = await page.locator("//ul[@class='list-group']/li/a").all();
    for(let each of allLinks){
        await expect(each).toBeVisible();
        //expect (await each.isVisible()).toBeTruthy();

        await expect(each).toBeEnabled();
    }
  });

  test('Verify that each link element has an href attribute', async ({ page }) => {
        let allLinks = await page.locator("//ul[@class='list-group']/li/a").all();

        for(let each of allLinks){
            await expect(each).toHaveAttribute("href");
        }

  });
});

