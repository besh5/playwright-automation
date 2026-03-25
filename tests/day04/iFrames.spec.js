
import { test, expect } from '@playwright/test';

test('IFrame test @iframe', async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/iframe");
  let frame = page.frameLocator("//iframe[@id='mce_0_ifr']");
  let textAreaInsideOfFrame = frame.locator("//body[@id='tinymce']");
  await textAreaInsideOfFrame.clear();
  //await textAreaInsideOfFrame.press("Meta+A");
  //await textAreaInsideOfFrame.press("Backspace");
  await textAreaInsideOfFrame.fill("Whatever text I want");
});