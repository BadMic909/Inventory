// Inside trigger.js
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Create the URL object
  const baseUrl = "https://badmic909.github.io/Inventory/post.html";
  const myUrl = new URL(baseUrl);

  // Add parameters safely
  myUrl.searchParams.set('key', process.env.KEY1);
  myUrl.searchParams.set('k2', process.env.KEY2);

  console.log("Opening URL...");
  // This will show the URL length to verify the keys are actually there
  console.log(`URL built. Length: ${myUrl.toString().length}`); 

  await page.goto(myUrl.toString());
  await page.waitForTimeout(45000); 
  await browser.close();
})();
