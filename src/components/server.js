const fs = require("fs/promises")
const puppeteer = require('puppeteer');

let DATE = new Date();
var OldMin = DATE.getMinutes();

async function Run() {
    setInterval(async () => {
        DATE = new Date();
        let NewMin = DATE.getMinutes();

        if (OldMin != NewMin) {

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://api.coinranking.com/v2/coins/?limit=10");

            const format = await page.evaluate(() => {
                return Array.from(document.querySelectorAll("pre")).map(x => x.textContent)
            })

            await fs.writeFile("code.json", format)

            await browser.close();

            OldMin = NewMin;

        } else {
            console.log("ishlayapti");
        }

    }, 2000);
}
Run()


