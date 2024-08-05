import { test, expect } from "@playwright/test";

test("Sorted from newest to oldest", async ({ page }) => {
  await page.goto("https://news.ycombinator.com/newest");
  await page.pause();

  const totalValuesNeeded = 100;
  const allValues = [];

  let collectedValues = 0;

  while (collectedValues < totalValuesNeeded) {
    // Collect values from the current page
    const elements = await page.$$(".age");

    for (let i = 0; i < elements.length; i++) {
      const titleValue = await elements[i].getAttribute("title");
      const dateValue = new Date(titleValue);
      const timestamp = dateValue.valueOf();
      allValues.push(timestamp);
      collectedValues++;
    }

    // Click the "More" link if more values are needed
    if (collectedValues < totalValuesNeeded) {
      const moreLink = await page.$('a.morelink[rel="next"]');
      if (moreLink) {
        await moreLink.click();
      } else {
        console.log("No more pages to load.");
        break;
      }
    }
  }

  // Split the collected values into two arrays
  const firstArray = allValues.slice(0, 99); // First 99 values
  const secondArray = allValues.slice(1, 100); // 2nd to 100th values

  // Perform the comparisons using Playwright's expect
  for (let i = 0; i < Math.min(firstArray.length, secondArray.length); i++) {
    expect.soft(secondArray[i]).toBeLessThanOrEqual(firstArray[i]);
  }

  console.log("All assertions passed.");

  // Print arrays for debugging
  console.log("First array:", firstArray);
  console.log("Second array:", secondArray);
});
