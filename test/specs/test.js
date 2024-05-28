import Page from '../pageobjects/page.js';

describe('Create New Paste', () => {

    it('should create a new paste', async () => {
        await browser.deleteCookies()
        await Page.open();
        await Page.newPaste('Hello from WebDriver', 'helloweb');
    })
})

