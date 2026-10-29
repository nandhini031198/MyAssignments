import { test, expect } from "@playwright/test";

test.use({ storageState: "Day5/Data/salesforceLogin.json" });

test("Skip Salesforce Login", async ({ page }) => {
  await page.goto(
    "https://orgfarm-52a0e88783-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome",
  );
  await page.waitForTimeout(3000);
  const url =
    "https://orgfarm-52a0e88783-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome";
  const title = "Lightning Experience | Salesforce";
  const accountName = "Test-6";
  await expect(page).toHaveURL(url);
  await expect(page).toHaveTitle(title);
  await page.locator(".slds-icon-waffle").click();
  await page.locator('//button[text() = "View All"]').click();
  await page
    .getByPlaceholder("Search apps or items...", { exact: true })
    .fill("Service");
  //await page.waitForTimeout(5000);
  await page
    .locator('(//one-app-launcher-app-tile[@role="listitem"])[1]')
    .click();
  await page.getByRole("button", { name: "Accounts List" }).click();
  await page.locator('//span[text()="New Account"]').click();
  await page.getByRole("textbox", { name: "Account Name" }).fill(accountName);
  await page.getByRole("button", { name: "Save", exact: true }).click();

  const a1 = await page.locator(".forceActionsText").innerText();
  console.log(a1);

  //const successMessage = await page.locator(".slds-hyphenate").innerText();
  expect(a1).toBe(`Account "${accountName}" was created.`);
});
