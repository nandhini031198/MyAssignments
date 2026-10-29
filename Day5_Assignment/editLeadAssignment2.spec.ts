import { test, expect } from "@playwright/test";

test("Edit Lead", async ({ page }) => {
  let company = "STuC";
  let annualRevenue = "20";
  let department = "IT";
  let description = "change of organization";

  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator("#username").fill("Demosalesmanager");
  await page.locator("#password").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.locator('//a[contains(text(),"CRM")]').click();
  await page.locator('//a[text()="Leads"]').click();
  await page.locator('//a[contains(text(),"Find Leads")]').click();
  await page
    .locator('(//div[@class="x-form-element"]/input[@name="firstName"])[3]')
    .fill("Nandhini");
  await page.locator('//button[text()="Find Leads"]').click();
  await page.locator("//tbody/tr/td[1]/div/a[1]").first().click();
  await page.locator('//a[text()="Edit"]').click();

  let pageTitle = await page.locator("#sectionHeaderTitle_leads").innerText();
  expect(pageTitle).toBe("Edit Lead");

  await page.locator("#updateLeadForm_companyName").fill(company);
  await page.locator("#updateLeadForm_annualRevenue").fill(annualRevenue);
  await page.locator("#updateLeadForm_departmentName").fill(department);
  await page.locator("#updateLeadForm_description").fill(description);
  await page.locator('//input[@value="Update"]').click();

  let editedCompany = (
    await page.locator("#viewLead_companyName_sp").innerText()
  ).split(" ");
  let editedAnnualRevenue = await page
    .locator("#viewLead_annualRevenue_sp")
    .innerText();
  let editedDepartment = await page
    .locator("#viewLead_departmentName_sp")
    .innerText();

  expect(editedCompany[0]).toBe(company);
  expect(editedAnnualRevenue).toBe(`$${annualRevenue}.00`);
  expect(editedDepartment).toBe(department);
});
