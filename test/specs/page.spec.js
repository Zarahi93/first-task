import Page from '../pageobjects/page.js';

describe('Create New Paste', () => {

    it('should create a new paste', async () => {
        await browser.deleteCookies()
        await browser.url('https://pastebin.com/');
        await Page.newPaste('Hello from WebDriver', 'helloweb');
    })
})

