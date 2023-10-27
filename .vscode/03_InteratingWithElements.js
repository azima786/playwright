const {chromium} = require('playwright');

(async() => {
    //adds wait
const browser = await chromium.launch({headless:false, slowMo:50})
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://react-redux.realworld.io/#/login")

//to enter input
await page.fill('input[type="email"]', 'qacamp.acad@gmail.com')
await page.press('input[type="email"]','Tab')
await page.type('input[type="password"]','test12345', {delay: 1})

await page.click('form >> "Sign in"', {position:{x:0, y:0}, button:'right', modifiers: ['Shift'], timeout: 45})

//await page.dblclick
//await page.focus or hoover

//await page.check
//await page.uncheck

//to check all the elements or loop through
const elements = await page.$$('.toggle')
elements.forEach(element => element.check())

await browser.close()

})()