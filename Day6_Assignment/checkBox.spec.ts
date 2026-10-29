import { test, expect } from "@playwright/test";

test("Handling Checkbox", async ({ page }) => {
  await page.goto("https://leafground.com/checkbox.xhtml");
  //Click on the "Basic Checkbox.”
  await page.locator('//span[text()="Basic"]').click();

  //Click on the "Notification Checkbox."
  await page.locator('//span[text()="Ajax"]').click();

  //Verify that the expected message is displayed.
  await expect(page.locator('//span[text()="Checked"]')).toBeVisible();

  //Click on your favorite language (assuming it's related to checkboxes).
  await page.locator('//label[text()="Javascript"]').click();

  //Click on the "Tri-State Checkbox."
  await page
    .locator(
      '//h5[text() = "Tri State Checkbox"]/following-sibling::div/div/div/div[2]',
    )
    .click();

  //Verify which tri-state option has been chosen.
  const state1 = await page
    .locator('//span[text()="State has been changed."]/following-sibling::p')
    .innerText();
  console.log(state1); // State = 1
  expect(state1).toBe("State = 1");
  // await page
  //   .locator(
  //     '//h5[text() = "Tri State Checkbox"]/following-sibling::div/div/div/div[2]',
  //   )
  //   .click();
  // const state2 = await page
  //   .locator('//span[text()="State has been changed."]/following-sibling::p')
  //   .innerText();
  // console.log(state2); // State = 2
  // expect(state2).toBe("State = 2");

  //Click on the "Toggle Switch."
  await page.locator(".ui-toggleswitch-slider").click();

  //Verify that the expected message is displayed.
  await expect(page.locator('//span[text()="Checked"]')).toBeVisible();
  await page.waitForTimeout(6000);

  // Verify if the Checkbox is disabled.
  //await expect(page.locator(".ui-state-default.ui-state-disabled")).toBeDisabled();

  // Select multiple options on the page (details may be needed).
  await page
    .locator(".ui-selectcheckboxmenu-trigger.ui-state-default.ui-corner-right")
    .click();
  //Directly select checkboxes
  let countryLocator1 = page.locator('//label[text() = "London"]').last();
  await countryLocator1.click();
  await expect(countryLocator1).toBeChecked();
  let countryLocator2 = page.locator('//label[text() = "Barcelona"]').last();
  await countryLocator2.click();
  await expect(countryLocator2).toBeChecked();

  //close dropdown and verify placeholder
  await page.getByRole("link", { name: "Close" }).click();
  let country1 = "London";
  let country2 = "Barcelona";
  let country3 = "Berlin";
  let countryplaceHolder = page.locator(
    ".ui-selectcheckboxmenu-multiple-container",
  );
  await expect(countryplaceHolder).toContainText(country1);
  await expect(countryplaceHolder).toContainText(country2);
  //Search and select checkbox
  await page
    .locator(".ui-selectcheckboxmenu-trigger.ui-state-default.ui-corner-right")
    .click();
  await page.getByRole("textbox", { name: "Filter Input" }).fill("Berlin");
  await page.locator('//label[text() = "Berlin"]').last().click();
  await page.getByRole("link", { name: "Close" }).click();
  await expect(countryplaceHolder).toContainText(country3);
});
