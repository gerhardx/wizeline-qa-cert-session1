import { Selector, t } from 'testcafe';

class UserInfoPage {
    constructor(){
        this.firstnameField = Selector('#first-name');
        this.lastnameField = Selector('#last-name');
        this.postalcodeField = Selector('#postal-code');
        this.continueButton = Selector('.cart_button');
        this.errorMessage = Selector('h3').withAttribute('data-test', 'error');        
    }
}

export default new UserInfoPage();