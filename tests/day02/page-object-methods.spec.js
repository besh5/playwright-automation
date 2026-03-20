import { test } from '@playwright/test';

test('Getting Page Title', async ({ page }) => {

    let link = "https://the-internet-5chk.onrender.com/";

    await page.goto(link);
    //await page.waitForTimeout(3000);
    let actualTitle = await page.title();


});

test("Getting the current URL", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/");
    let actualUrl = page.url();

});

test("Set window size", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/");
    //await page.setViewportSize({ width: 800, height: 600 });
    


});