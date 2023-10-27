const {chromium} = require('playwright');

(async() => {
    //adds wait
const browser = await chromium.launch()
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

//inner text
const logoText =await page.$eval('.navbar-brand', el => el.innerText)
console.log('Logo TEXT: ' + logoText)

//href - website
const href =await page.$eval('.navbar-brand', el => el.href)
console.log('Logo HREF: ' + href)

//inner text - all elements
const popularTags =await page.$$eval('.tag-default', el => el.length)
console.log('Popular Tags Count: '+popularTags)

//content - full text
const content =await page.textContent('.navbar-brand')
console.log('Content: ' + content)

//text - visible text
const text =await page.innerText('.navbar-brand')
console.log('text: ' + text)

//html
const html =await page.innerHTML('.feed-toggle')
console.log('html: ' + html)

//href
const href1 =await page.getAttribute('.navbar-brand', 'href')
console.log('HREF: ' + href1)

await browser.close()
}) ()
