import { test, chromium, firefox } from "@playwright/test";

test("Launch browswer", async ({}) => {
  // Launch Browser 1
  const browser1 = await chromium.launch();
  const newContext1 = await browser1.newContext();
  const page1 = await newContext1.newPage();
  await page1.goto("https://www.redbus.in/");

  // Launch Browser 2
  const browser2 = await firefox.launch();
  const newContext2 = await browser1.newContext();
  const page2 = await newContext2.newPage();
  await page2.goto("https://www.flipkart.com/");

  console.log(await page1.title());
  console.log(await page2.title());
  console.log(await page1.url());
  console.log(await page2.url());
});
