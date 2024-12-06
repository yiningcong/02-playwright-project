import { test, expect } from '@playwright/test';
test.describe("testing the eCommerce website", () => {
    test("has title", async ({ page }) => {
        await page.goto("https://ecommerce-playground.lambdatest.io/");
        await expect(page).toHaveTitle(/Your Store/);
    })

    test("special link", async ({ page }) => {
        await page.goto("https://ecommerce-playground.lambdatest.io/");
        await page.getByRole("link", { name: "Special Hot", exact: true }).click();
        await page.getByRole("link", { name: "Continue"}).click();
    })

    test("search for phone and buy", async ({ page }) => {
        await page.goto("https://ecommerce-playground.lambdatest.io/");
        await page.getByPlaceholder('Search For Products').first().click()
        await page.getByPlaceholder('Search For Products').first().fill("phone");
        await page.getByRole("button", { name: "Search" }).click();
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await page.locator('.product-thumb-top').nth(2).hover();
        await page.locator('.fa-shopping-cart').nth(2).click();
        await expect(page.getByText("Success: You have added")).toBeVisible();
    })
})