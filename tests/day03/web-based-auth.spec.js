
import { test, expect } from '@playwright/test';

test("Bypass authentification by embedding credentials in URL", async ({page,}) => {
    await page.goto("https://admin:admin@the-internet-5chk.onrender.com/basic_auth");
    await page.waitForTimeout(3000);
});

test('Bypass auth by encoding credentials base64 format', async ({ page }) => {
    let encodedCreds = Buffer.from("admin:admin").toString("base64");
    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCreds}`});

    page.goto("https://the-internet-5chk.onrender.com/basic_auth");
    await page.waitForTimeout(3000);
});

