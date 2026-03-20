import { test } from "@playwright/test";
import { before } from "node:test";

test.describe("Checkbox Tests, Dropdowns", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("Check", async ({ page }) => {
    await page.locator("//a[@href='/checkboxes']").click();
    let checkBox1 = page.locator("//input[@id='box1']");
    let checkBox2 = page.locator("//input[@id='box2']");
    await checkBox1.check();
    await checkBox2.check();
    
  });

  test("Uncheck", async ({ page }) => {
    await page.locator("//a[@href='/checkboxes']").click();
    let checkBox1 = page.locator("//input[@id='box1']");
    let checkBox2 = page.locator("//input[@id='box2']");
    await checkBox1.uncheck();
    await checkBox2.uncheck();
    
  });

  test("Select Option", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();
    
    let simpleDropdown = page.locator("//select[@id='dropdown']");
    //await simpleDropdown.selectOption("1"); //select by value
    //await simpleDropdown.selectOption({value: "1"}); //select by value
    //await simpleDropdown.selectOption({label: "Option 1"}); //select by text
    await simpleDropdown.selectOption({index: 1}); //select by index
    

  });
});
