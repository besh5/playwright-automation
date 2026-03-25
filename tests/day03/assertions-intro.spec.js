import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");
  expect(page).toHaveTitle("Practice");
  expect(await page.title()).toBe("Practice");
});
test.describe("Assertions test group", () => {
  test("Test1 - To verify checkboxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("//input[@id='box1']");
    let secondCheckbox = page.locator("//input[@id='box2']");

    await firstCheckbox.check();
    await secondCheckbox.check();

    expect(firstCheckbox).toBeChecked();
    expect(secondCheckbox).toBeChecked();

    //--------------------------------------------------------------

    let status = await firstCheckbox.isChecked();
    expect(status).toBe(true);
  });

  test("Test2 - To verify checkboxes are unchecked", async ({ page }) => {
    let firstCheckbox = page.locator("//input[@id='box1']");
    let secondCheckbox = page.locator("//input[@id='box2']");
    firstCheckbox.uncheck();
    secondCheckbox.uncheck();

    expect(firstCheckbox).not.toBeChecked();
    expect(secondCheckbox).not.toBeChecked();
  });

  test("Test3 - To verify visible text of the element", async ({ page }) => {

        let headerElement = page.locator("//span[@class='h1y']");
        expect(await headerElement.textContent()).toEqual("Test Automation Practice");
        await expect(headerElement).toHaveText("Test Automation Practice");

  });
});
