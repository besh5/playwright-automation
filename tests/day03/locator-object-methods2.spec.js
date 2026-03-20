import { test } from "@playwright/test";

test.describe("Text and Attribute Methods", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("innerText()", async ({ page }) => {
    let actualHeaderText = await page.locator("//h1").innerText();
    console.log(actualHeaderText);
  });

  test("inputValue()", async ({ page }) => {
    //only works with <input>, <textArea> and <select> elements
    let inputLink = page.getByText("Inputs");
    await inputLink.click();
    let inputBox = page.locator("//input[@type='number']");
    await inputBox.fill("12345");
    
    let valueOfInputBox = await inputBox.inputValue();
    console.log(valueOfInputBox);
  });

  test("getAttribute()", async ({ page }) => {

    //it retrieves the value of the specified attribute from the element.
    //If the attribute does not exist, it returns null.
    let link = page.getByText("A/B Testing");
    let hrefValue = await link.getAttribute("href");
    console.log(hrefValue); 

  });
});
