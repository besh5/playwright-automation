import { test, expect } from "@playwright/test";

test("test @env-test", async ({ page }) => {
  console.log(process.env.PRACTICE_USERNAME);
  console.log(process.env.PRACTICE_PASSWORD);
});

test("Bypass auth by encoding credentials base64 format @env-test-headed", async ({ page }) => {
  let encodedCreds = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`
  ).toString("base64");
  await page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCreds}` });

  page.goto("https://the-internet-5chk.onrender.com/basic_auth");
  await page.waitForTimeout(3000);
});
