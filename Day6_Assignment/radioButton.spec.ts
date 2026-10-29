import { test, expect } from "@playwright/test";

test("Radio button Handling", async ({ page }) => {
  await page.goto("https://leafground.com/radio.xhtml");

  //Identify and assert the default selected radio button.
  const defultradio1 = page.locator(
    '//label[text() = "Safari"]/preceding-sibling::div/div[2]/span[@class = "ui-radiobutton-icon ui-icon ui-icon-bullet ui-c"]',
  );
  await expect(defultradio1).toBeEnabled();

  const defultradio2 = page.locator(
    '//label[text()="21-40 Years"]/parent::div/div/div[2]',
  );
  await expect(defultradio2).toBeEnabled();

  //Click your most favorite browser and assert that the browser is enabled.
  await page.locator('//label[text()="Firefox"]').first().click();

  let firfoxenable = page
    .locator('//label[text()="Firefox"]/preceding-sibling::div/div[2]/span')
    .first();
  await expect(firfoxenable).toBeEnabled();

  //Select one of the cities
  await page.locator('//label[text()="Bengaluru"]').click();

  //Select the age group. Assert the default selected button.
  const defultage = page.locator(
    '//label[text()="21-40 Years"]/parent::div/div/div[2]',
  );
  await expect(defultage).toBeEnabled();
  await page.locator('//label[text()="1-20 Years"]').click();
});
