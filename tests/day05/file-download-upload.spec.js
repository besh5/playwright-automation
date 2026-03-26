import { test, expect } from '@playwright/test';
import path from "path";
import fs from "fs";

test('File download', async ({ page }) => {

  //creating event listener for monitoring downloading
  let promisedDownloadEvent = page.waitForEvent("download");

  await page.goto("https://the-internet-5chk.onrender.com/download");
  await page.click("text='some-file.txt'");
  let download = await promisedDownloadEvent;
  //await page.waitForTimeout(2000);
  let downloadPath = path.join(__dirname, "./downloads", download.suggestedFilename());
  await download.saveAs(downloadPath);
  expect(fs.existsSync(downloadPath)).toBeTruthy();

});

test('File upload', async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/upload");
    let filepath = path.join(__dirname, "./uploads", "TestUpload.txt");
    
    await page.setInputFiles("//input[@id='file-upload']", filepath);
    
    await page.click("//input[@id='file-submit']"); 
    
    await expect(page.getByText("File Uploaded!")).toBeVisible();

});


