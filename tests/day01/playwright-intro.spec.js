//const{test} = require('@playwright/test');   old way of importing test function from playwright
import { test } from "@playwright/test"; // new way of importing test function from playwright

test("Simple Google test", async ({ page }) => {
  //test code goes here
  await page.goto("https://www.google.com");
  await page.waitForTimeout(2000);
});



