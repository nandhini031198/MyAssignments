import { test, chromium } from "@playwright/test";

test("Login Salesforce", async ({}) => {
  //Launch Browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.goto("https://login.salesforce.com/");
  await page
    .locator("#username")
    .fill("gnandhinik.448222b75944@agentforce.com");
  await page.locator("#Login").click();
  await page.locator("#password").fill("Nandhini@11");
  await page.locator("#Login").click();
  await page.waitForTimeout(9000);
  console.log(await page.title());
  console.log(page.url());
});
