import { test, expect } from "@playwright/test";

test("Add Shoes to Cart", async ({ page }) => {
  //Launch browser and navigate to Decathlon website https://www.decathlon.in/
  await page.goto("https://www.decathlon.in/");

  //Verify URL using Playwright assertions
  expect(page.url()).toMatch("https://www.decathlon.in/");

  // Click on the search Box
  //  Enter the product name “Shoes”
  // Press Enter or select a suggestion from the dropdown
  await page
    .locator(
      '//div[@data-test-id="search-input-desktop:animation-wrapper"]/following-sibling::input',
    )
    .click();
  await page
    .locator(
      '//input[@placeholder="Search for 60+ sports and 6,000+ products"]',
    )
    .fill("Shoes");
  await page.locator('//span[text()="Shoes"]').first().click();

  //Verify the product listing page is displayed or Verify search results page title
  const productListPage = page.locator(
    '//span[text() = "Exclude out of stock"]',
  );
  await expect(productListPage).toBeVisible();

  //Click on the Sport filter dropdown
  await page.waitForTimeout(3000);
  await page.locator('//span[text() = "Sport"]').click();

  // Select Running from the Sport dropdown
  await page.locator('//span[text() = "Running"]').click();
  await expect(page.locator('//span[text() = "Running"]').last()).toBeVisible();

  //Click on the Gender filter dropdown 12. Select Men
  await page.locator('//span[text() = "Gender"]').click();
  await page.locator('//span[text() = "Women"]').last().click();
  //Select size
  await page.locator('//span[text() = "Size"]').click();
  await page.locator('//span[text() = "8"]').first().click();

  //Select price range
  await page.locator('//span[text() = "Most relevant"]').click();
  await page.locator('//span[text() = "Price (low → high) "]').click();

  //From the filtered results,
  // click on the first available product 18. On the product details page, select Size – UK 10
  await page
    .locator(
      '//div[@data-test-id = "category-products-grid"]/div/a[@data-test-id="product-card-link"]',
    )
    .first()
    .click();
  await page
    .locator(
      '//ul[@data-test-id="pdp-size-selector-desktop:grid"]/li[6]/button',
    )
    .click();

  //Click on Add to cart button and Verify that the product is successfully added to the cart
  await page.locator('//span[text()="Add to cart"]').click();
  await expect(
    page.locator(
      '//a[@data-test-id="header-desktop:cart-link"]/div/span[text()="1"]',
    ),
  ).toBeVisible();
});
