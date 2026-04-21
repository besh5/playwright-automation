import { firefox, test } from '@playwright/test';

test('Context fixture example', async ({ context }) => {

    let page1 = await context.newPage();
    let page2 = await context.newPage();

    await page1.goto("https://the-internet-5chk.onrender.com/checkboxes");
    await page2.goto("https://the-internet-5chk.onrender.com/checkboxes");


});




test('Browser fixture example', async ({ browser }) => {

    let context1 = await browser.newContext();  
    let context2 = await browser.newContext();

    let page1 = await context1.newPage();
    let page2 = await context2.newPage();

    await page1.goto("https://the-internet-5chk.onrender.com/checkboxes");
    await page2.goto("https://the-internet-5chk.onrender.com/checkboxes");

});

test('Custom configurations', async ({  }) => {

    let browser = await firefox.launch({
        headless: false,
        slowMo: 2000
    });

    let context1 = await browser.newContext();
    let page1 = await context1.newPage();

    await page1.goto("https://the-internet-5chk.onrender.com/checkboxes");
    
})
