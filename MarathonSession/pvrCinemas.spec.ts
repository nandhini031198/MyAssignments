import { test, expect } from "@playwright/test";

test("Book Ticket", async ({ page }) => {
  //1. Launch the browser and open https://www.pvrcinemas.com/
  await page.goto("https://www.pvrcinemas.com/");
  //2. Select the city as “Chennai”
  await page
    .locator('//img/parent::span[@class="cities-placed"]/parent::span')
    .click();
  await page.locator('//span[@id="city"]/input').fill("Chennai");
  await page.locator('//ul[@id="city_list"]/li').click();
  //3. Choose cinema from the available list
  await page.locator('//span[text()="Cinema"]').click();
  //4. Select movie Location , date , movie and time
  let movieLocation = "INOX National,Virugambakkam Chennai";
  let movieDte = "Tomorrow";
  let movie = "ENEMY OF THE SMUGGLER";
  let movieTime = "07:55 PM";
  await page.locator('//span[text()="Select Cinema"]').click();
  await page.locator(`//span[text()="${movieLocation}"]`).last().click();
  await page.locator(`//span[text()="${movieDte}"]`).click();
  await page.locator(`//span[text()="${movie}"]`).last().click();
  await page.locator(`//span[text()="${movieTime}"]`).last().click();
  //5.Click on book button
  await page.getByRole("button", { name: "submit" }).click();
  //6.Click on Accept for Terms & Conditions
  await page.getByRole("button", { name: "Accept" }).click();
  //Select available seats
  await page
    .locator(
      '//div[@class="seat-category-heading"][2]/following-sibling::tr[5]/td[10]/span[text() = "9"]',
    )
    .click();
  await page.waitForTimeout(3000);
  await page
    .locator(
      '//div[@class="seat-category-heading"][2]/following-sibling::tr[5]/td[11]/span[text() = "10"]',
    )
    .click();
  //Assert Seats and Total price
  const seats = await page
    .locator('//div[@class="seat-info"]/div/div[@class="seat-number"]/p')
    .allTextContents();
  console.log(seats);
  expect(seats[0]).toBe("G10");
  expect(seats[1]).toBe("G9");
  const grand = await page
    .locator('//div[@class="grand-prices"]/h6[text()="436.04"]')
    .innerText();
  console.log(grand);
  expect(grand.trim()).toBe("436.04");
  //Verify the Title of the page
  const pagetitle = await page.title();
  expect(pagetitle).toContain("PVR Cinemas");
  //Proceed to booking
  await page.locator('//button[text()="Proceed"]').click();
});
