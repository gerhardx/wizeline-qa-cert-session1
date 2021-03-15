import { Selector, t } from 'testcafe';

class InventoryPage {
    constructor(){
        this.title = Selector('.product_label');
        this.menuButton = Selector('#react-burger-menu-btn');
        this.logOutButton = Selector('#logout_sidebar_link');

    }

}

export default new InventoryPage();