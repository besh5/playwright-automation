

import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");
  
});
test.afterEach(async ({ page }) => {
  //await page.waitForTimeout(2000);
});


test.describe('Mouse actions tests', () => {
  test('Left click', async ({ page }) => {
    await page.click("//a[@href='/abtest']");
  });

  test('Right click', async ({ page }) => {
    await page.click("//a[@href='/abtest']", { button: "right" });
  });

  test('Hover', async ({ page }) => {
    
    await page.click("text='Hovers'");
    let allHoverableIcons = await page.locator("//img[@alt='User Avatar']").all();
   
    for(let each of allHoverableIcons){
        await each.hover();
        //await page.waitForTimeout(1000);
    }

  });
  test("Mouse wheel scrolling", async ({ page }) => {
    await page.mouse.wheel(0,2000);

  });
   test("Scrolling to element", async ({ page }) => {

    let inputsLink = page.getByText("Inputs");
    await inputsLink.scrollIntoViewIfNeeded();
    await inputsLink.click();


   });
   test("Drag and drop", async ({ page }) => {
    await page.click("text='Drag and Drop'");
    let source = await page.locator("//div[@id='column-a']/header");
    let target = await page.locator("//div[@id='column-b']/header");

    await page.dragAndDrop(
      "//div[@id='column-a']/header",
      "//div[@id='column-b']/header",
    );
    //await page.waitForTimeout(1000);

    await source.dragTo(target);

   });
});
