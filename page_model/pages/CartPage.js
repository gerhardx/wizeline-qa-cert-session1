import { Selector, t } from 'testcafe';

class CartPage {
    constructor(){
        this.title = Selector('.subheader');
        this.checkoutButton = Selector('.checkout_button');
    }

}

export default new CartPage();