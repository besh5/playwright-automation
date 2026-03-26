import { test, expect } from "@playwright/test";

test("Web table practice", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/web-tables");
  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
  let tableRows = await table.locator("//tr").all();
  let tableColumns = await table.locator("//th").all();
  let tableCells = await table.locator("//td").all();

  expect(tableRows.length).toBe(9);
  expect(tableColumns.length).toBe(13);
  expect(tableCells.length).toBe(104);

  for (let each of tableCells) {
    console.log(await each.textContent());
  }
});



test('Web Table test', async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/web-tables");
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    let tableRows = await table.locator("//tr").all();
    
    for (let row of tableRows) {
        let cells = await row.locator("//td").all();
        for (let i = 1; i < cells.length - 1; i++) {
            console.log(await cells[i].textContent());
        } 
        console.log("-----------------------");
    }
});

test("web table test 3", async ({ page }) => {

await page.goto("https://the-internet-5chk.onrender.com/web-tables");
let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
let checkboxes = await table.locator("//input[@type='checkbox' ]").all();

for(let each of checkboxes){
    await each.check();
    await expect(each).toBeChecked();
}

});
