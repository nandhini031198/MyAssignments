import { test, expect } from "@playwright/test";

test("Handling Buttons", async ({ page }) => {
  await page.goto("https://leafground.com/button.xhtml");

  //Write a script to click the button and confirm a title change or any visible response
  await page.locator('//span[text()="Click"]').click();
  const title = "Dashboard";
  await expect(page).toHaveTitle(title);

  //Assert the disabled state of a button.
  await page.goBack();
  await expect(page.locator('//span[text() = "Disabled"]')).toBeDisabled();

  //Click the Image button and click on any hidden button
  await page.locator('//span[contains(text(),"Image")]').click();
  await page.locator('//span[contains(text(),"Info")]').click();

  //Check how many rounded buttons are present
  await page.waitForTimeout(5000);
  const countt = await page
    .locator('//button[contains(@class,"rounded-button")]')
    .count();
  console.log(countt);
  //console.log(await page.locator('//h5[text()="How many rounded buttons are there?"]/following-sibling::*//button').count());
  console.log(await page.locator("//button").count());
});
