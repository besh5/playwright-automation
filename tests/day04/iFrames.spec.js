
import { test, expect } from '@playwright/test';

test('IFrame test @iframe', async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/iframe");

  // Click the X/close button before interacting with the iframe
  await page
    .locator(
      "//button[@class='tox-notification__dismiss tox-button tox-button--naked tox-button--icon']",
    )
    .click();
  let frame = page.frameLocator("//iframe[@id='mce_0_ifr']");
  let textAreaInsideOfFrame = frame.locator("//body[@id='tinymce']");

  // Set contenteditable to true before interacting
  await textAreaInsideOfFrame.evaluate((el) => {
    el.contentEditable = "true";
  });
  //await textAreaInsideOfFrame.clear();
  //await textAreaInsideOfFrame.press("Meta+A");
  //await textAreaInsideOfFrame.press("Backspace");
  
  await textAreaInsideOfFrame.fill("Whatever text I want");
  await page.waitForTimeout(2000);
});