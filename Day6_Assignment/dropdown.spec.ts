import { test, expect } from "@playwright/test";

test("Dropdwon Handling", async ({ page }) => {
  await page.goto("https://leafground.com/select.xhtml");
  //Select your favorite UI automation tool using the different select options
  await page.selectOption('//select[@class = "ui-selectonemenu"]', {
    label: "Playwright",
  });
  //Get the count and print of all the values
  const LocCount = await page
    .locator('//select[@class = "ui-selectonemenu"]/option')
    .count();
  console.log(LocCount);
  const LocTxt = await page
    .locator('//select[@class = "ui-selectonemenu"]/option')
    .allTextContents();
  console.log(LocTxt);
  //Choose your preferred Country
  await page.locator('//label[text() = "Select Country"]').click();
  await page.locator('//li[text() = "India"]').click();
  //Confirm Cities belongs to Country is loaded
  await page.locator('//label[text() = "Select City"]').click();
  await page.locator('//li[text() = "Chennai"]').click();
  //Choose any three courses from the dropdown
  const options = ["Playwright", "AWS", "Appium"];
  for (const option of options) {
    await page.getByRole("button", { name: "Show Options" }).click();
    await page.locator(`//li[text() = "${option}"]`).click();
  }
  //Choose a language and print all the values from the dropdown.
  await page.locator('//label[text() = "Select Language"]').click();
  await page.locator('//li[text()="Tamil"]').click();
  const languageCount = await page
    .locator(
      '//div/h5[text() = "Choose language randomly"]/following-sibling :: div//div/div[@role="combobox"]/div[2]/select/option',
    )
    .allTextContents();
  console.log(languageCount);
  //Select 'Two' irrespective of the language chosen
  await page.locator('//label[text() = "Select Values"]').click();
  await page
    .getByRole("option", {
      name: /^(Two|இரண்டு|రెండు|ಎರಡು|രണ്ട്)$/,
    })
    .click();
});
