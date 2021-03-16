import { Selector, t } from 'testcafe';

class CartPage {
    constructor(){
        this.title = Selector('.subheader');
    }

}

export default new CartPage();