// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require("puppeteer-extra")

// add stealth plugin and use defaults (all evasion techniques)
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage()
  await page.setViewport({ width: 2800, height: 1800 })
  // https://www.liangjianghu.com/app-ranking
  // https://www.distilnetworks.com/
  // https://www.qimai.cn/rank
  await page.goto("https://www.distilnetworks.com/")
  await page.waitFor(120000)
  await page.screenshot({ path: "testresultdistilnetworks.png", fullPage: true })
  await browser.close()
})
