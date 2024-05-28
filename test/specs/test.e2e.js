import { expect } from '@wdio/globals';
import Page from '../pageobjects/page';

describe('Create New Paste', () => {
    it('should create a new paste with the following attributes', async () => {
        await Page.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

