const {chromium} = require('playwright');
const {expect} = require('expect');
 
//adds wait
(async() => {
const browser = await chromium.launch({headless:false})
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://react-redux.realworld.io/#/login")

//to enter input
await page.fill('input[type="email"]', 'qacamp.acad@gmail.com')
await page.press('input[type="email"]','Tab')
await page.type('input[type="password"]','test12345')

await page.click('form >> "Sign in"')

//static wait for page to load
await page.waitForTimeout(5000)

//inner text - contains text
const logoText =await page.$eval('.navbar-brand', el => el.innerText)
expect(logoText).toBe('conduit')

//href - Defined yes or no
const href =await page.$eval('.navbar-brand', el => el.href)
expect(href).toBeDefined()

//inner text - greater than
const popularTags =await page.$$eval('.tag-default', el => el.length)
expect(popularTags).toBeGreaterThanOrEqual(0)

//content - full text
const content =await page.textContent('.navbar-brand')
console.log('Content: ' + content)

//text - visible text
const text =await page.innerText('.navbar-brand')
console.log('text: ' + text)

//html - contains
const html =await page.innerHTML('.feed-toggle')
expect(html).toMatch('Your Feed')
expect(html).toMatch('Global Feeds')

//href - does not contain
const href1 =await page.getAttribute('.navbar-brand', 'href')
expect(href1).not.toMatch('https://react-redux.realworld.io/#/login')

await browser.close()
}) ()
