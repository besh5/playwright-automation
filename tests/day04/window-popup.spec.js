import { test, expect } from '@playwright/test';

test('Window pop-up practice', async ({ page }) => {

    //creating event listener for monitoring window pop-ups
    let promisedNewPage = page.waitForEvent("popup");  // no await

    await page.goto("https://the-internet-5chk.onrender.com/windows");
    await page.click("text='Click Here'"); // triggers pop-up event 
    let newPage = await promisedNewPage; //await for the promise to be resolved

    expect(newPage).toHaveTitle("New Window");
    expect(page).toHaveTitle("Windows");

    await page.bringToFront();
    let firstWindowElement = page.getByText("Opening a new window");
    await expect(firstWindowElement).toBeVisible();

    await newPage.bringToFront();
    let secondWindowElement = newPage.getByText("New Window");
    await expect(secondWindowElement).toBeVisible();

});