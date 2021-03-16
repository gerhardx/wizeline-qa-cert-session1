import { Selector, t } from 'testcafe';

class OverviewPage {
    constructor(){
        this.title = Selector('.subheader');
        this.checkoutButton = Selector('.cart_button');
    }
}

export default new OverviewPage();