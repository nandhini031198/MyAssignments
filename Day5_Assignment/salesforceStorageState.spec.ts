import { test } from "@playwright/test";

test("Salesforce Login", async ({ page, context }) => {
  page.goto("https://login.salesforce.com/");
  await page
    .getByRole("textbox", { name: "Username" })
    .fill("gnandhinik.448222b75944@agentforce.com");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Nandhini@11");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.waitForTimeout(9000);
  await page.getByRole("button", { name: "App Launcher" }).click();
  await context.storageState({ path: "Day5/Data/salesforceLogin.json" });
});
