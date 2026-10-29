import { test, expect } from "@playwright/test";

test("Create Lead", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator("#username").fill("Demosalesmanager");
  await page.locator("#password").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.locator('//a[contains(text(),"CRM")]').click();
  await page.locator('//a[contains(text(),"Leads")]').click();
  await page.locator('//a[text()="Create Lead"]').click();
  const companyName = "infyhgf";
  const firstName = "Nandhini";
  const lastName = "Jenniee";
  const salutation = "Consultant";
  const title = "QA";
  const annualRevenue = "10";
  const department = "IT/Delivery";
  const contactNumber = "9876543210";
  await page.locator("#createLeadForm_companyName").fill(companyName);
  await page.locator("#createLeadForm_firstName").fill(firstName);
  await page.locator("#createLeadForm_lastName").fill(lastName);
  await page.locator("#createLeadForm_personalTitle").fill(salutation);
  await page.locator("#createLeadForm_generalProfTitle").fill(title);
  await page.locator("#createLeadForm_annualRevenue").fill(annualRevenue);
  await page.locator("#createLeadForm_departmentName").fill(department);
  await page.locator("#createLeadForm_primaryPhoneNumber").fill(contactNumber);
  await page.locator('//input[@name="submitButton"]').click();
  //Assertions
  let companyNameLocator = await page
    .locator("#viewLead_companyName_sp")
    .innerText();
  const companyNameuni = companyNameLocator.split(" ");
  const firstNameLocator = await page
    .locator('//span[@id="viewLead_firstName_sp"]')
    .innerText();
  const lastNameLocator = await page
    .locator("#viewLead_lastName_sp")
    .innerText();
  const statusLocator = await page.locator("#viewLead_statusId_sp").innerText();
  //Non-Retry Assertion
  expect(companyNameuni[0]).toBe(companyName);
  expect(firstNameLocator).toBe(firstName);
  expect(lastNameLocator).toBe(lastName);
  expect(statusLocator).toBe("Assigned");
});
