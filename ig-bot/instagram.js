const puppeteer = require('puppeteer');

const BASE_URL = 'https://instagram.com';
const ACC_URL = 'https://www.instagram.com/kpopcanadatags/';

const customDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const instagram = {
    browser: null,
    page: null,

    initialize: async() => {

        instagram.browser = await puppeteer.launch({
            headless: false
        });

        instagram.page = await instagram.browser.newPage();
        await instagram.page.setViewport({ width: 1920, height: 980});
    },

    login: async(username, password) => {

        await instagram.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
        await customDelay(1000);

        /* Writing username and password */
        await instagram.page.type('input[name="username"]', username, { delay: 50 });
        await instagram.page.type('input[name="password"]', password, { delay: 50 });

        // click login button
        let loginButton = await instagram.page.$x('//div[contains(text(), "Log in")]');
        await loginButton[0].click();

        await customDelay(10000);
        await instagram.page.waitForSelector('svg[aria-label="Settings"]');
    },

    savePics: async() => {

        await instagram.page.goto(ACC_URL, { waitUntil: 'networkidle2' });
        await customDelay(10000);

        let tagged = await instagram.page.$x('//span[contains(text(), "Tagged")]');
        await tagged[0].click();
        await customDelay(1000);

        let posts = await instagram.page.$$('div[class="_aagw"]');
        // returns array of all elements/pics

        for (let i = 0; i < 1000; i++) {

            await posts[0].click();

            // wait for model to appear
            await instagram.page.waitForSelector('div[aria-hidden="true"]');
            await customDelay(1000);

            // Check if post-of-interes
            const forSale = await instagram.page.$('h1::-p-text(wts)');
            const skz = await instagram.page.$('h1::-p-text(skz)');
            const lsf = await instagram.page.$('h1::-p-text(lesserafim)');
            const itzy = await instagram.page.$('h1::-p-text(itzy)');

            if (forSale && skz || forSale && lsf || forSale && itzy) {
                let canSave = await instagram.page.$('svg[aria-label="Save"]');

                if (canSave) {
                    await instagram.page.click('svg[aria-label="Save"]');
                }
            }

            await customDelay(1000);

            // close post
            await instagram.page.keyboard.press('ArrowRight');

            await customDelay(2000);
        }
    }
}

module.exports = instagram;
