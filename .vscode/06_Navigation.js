const {chromium} = require('playwright');
const {expect} = require('expect');
 
//adds wait
(async() => {
const browser = await chromium.launch({headless:false})
const context = await browser.newContext()
const page = await context.newPage()

await browser.close()
}) ()
