

import {test} from '@playwright/test';

test.describe("Groups Intro", () => {

    test.beforeEach(async () => {
        console.log("Before Each");
    });
     test.afterEach(async () => {
        console.log("After Each");
    });

    test.beforeAll(async () => {
        console.log("Before All");
    });
    
    test.afterAll(async () => {
        console.log("After All");
    }); 

    test("TC1", async () => {
        console.log("TC1");
    });

    test("TC2", async () => {
        console.log("TC2");
    });

    test("TC3", async () => {
        console.log("TC3");
    });


});