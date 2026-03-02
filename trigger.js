const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const key = process.env.MY_REPORT_KEY;
  const key2 = process.env.k2;
  const url = `https://badmic909.github.io/Inventory/post.html?key=${key}&k2=${key2}`;
  
  console.log("Opening page...");
  await page.goto(url);
  
  // Now we wait inside the script, which Playwright understands
  await page.waitForTimeout(30000); 
  
  await browser.close();
  console.log("Done.");
})();
