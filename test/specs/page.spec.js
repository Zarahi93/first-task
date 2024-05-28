import Page from '../pageobjects/page.js';
const pastePage = new Page;

describe('Create New Paste', () => {

    it('should create a new paste', async () => {
        await browser.deleteCookies()
        await pastePage.open();
        await pastePage.newPaste('Hello from WebDriver', 'helloweb');
    })
})

