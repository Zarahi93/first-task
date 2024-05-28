import Page from '../pageobjects/page';

describe('Create New Paste', () => {
    it('should create a new paste with the following attributes', async () => {
        await browser.deleteCookies()
        await Page.open();
        await Page.newPaste('Hello from WebDriver', 'helloweb');
    })
})

