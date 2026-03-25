import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/javascript_alerts");
  expect(page).toHaveTitle("Alerts");
});

test.describe("Alerts practice @alerts", () => {
  test("JS Simple Alert", async ({ page }) => {
    await page.locator("//button[@onclick='jsAlert()']").click();
    expect(page.locator("//p[@id='result']")).toHaveText(
      "You successfully clicked an alert",
    );
    await page.waitForTimeout(2000);
  });

  test("JS Confirmation alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert message: ${alert.message()}`);
      //await page.waitForTimeout(2000);
      await alert.accept();
    });
    await page.locator("//button[@onclick='jsConfirm()']").click();
    //await page.waitForTimeout(2000);

    expect(page.locator("//p[@id='result']")).toHaveText("You clicked: Ok");
  });

  test("JS Prompt Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert message: ${alert.message()}`);
      //await page.waitForTimeout(2000);
      await alert.accept("Your prompt");
    });

    await page.locator("//button[@onclick='jsPrompt()']").click();
    //await page.waitForTimeout(2000);
  });
});
