import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://pastebin.com/${path}`)
    };

    get textAreaId(){
        return $('#postform-text');
    };

    get selectPasteExpiration(){
        return $('option[value="10M"]');
    };

    get inputName(){
        return $('#postform-name');
    };

    get btnCreateNewPaste(){
        return $('button[type="submit"]');
    };
}
