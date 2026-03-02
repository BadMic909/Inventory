const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Use the EXACT names from your YAML env section
  const key1 = process.env.MY_REPORT_KEY;
  const key2 = process.env.k2;
  
  // Construct the URL with the proper ampersand (&)
  const url = `https://badmic909.github.io/Inventory/post.html?key=${key1}&k2=${key2}`;
  
  console.log("Opening page...");
  // This helps you see if the URL is being built (it will show as ***)
  console.log(`Target URL length: ${url.length}`); 

  await page.goto(url);
  
  // Give it 45 seconds to finish the Supabase fetch and Email POST
  await page.waitForTimeout(45000); 
  
  await browser.close();
  console.log("Done.");
})();
