import Page from '../pageobjects/page.js';
const pastePage = new Page;

describe('Create new paste', () => {

    it('should create a new paste', async () => {
        await browser.deleteCookies()
        await pastePage.open();
        await browser.pause(2000);
        await pastePage.newPaste('Hello from WebDriver', 'helloweb');
    })
})

