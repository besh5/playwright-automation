
import {expect, test} from '@playwright/test';


test.describe("Practice CYDEO", async () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://the-internet-5chk.onrender.com/");
    });

    test("Verify Title", async({page}) => {

        let actualTitle = await page.title();
        
        
        await expect(page).toHaveTitle("Practice");

    } );
    
    test("Verify URL", async({page}) => {
        let actualURL = await page.url();
        await expect(page).toHaveURL("https://the-internet-5chk.onrender.com/");
    });
    
});

