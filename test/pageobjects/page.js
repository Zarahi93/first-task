import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
   
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

async newPaste(code, pasteTitle){
    await this.textAreaId.setValue(code);
    await this.selectPasteExpiration.click();
    await this.inputName.setValue(pasteTitle);
    await this.btnCreateNewPaste.click();
};

}
