import { Selector, t } from 'testcafe';

class InventoryPage {
    constructor(){
        this.title = Selector('.product_label');
        this.menuButton = Selector('#react-burger-menu-btn');
        this.logOutButton = Selector('#logout_sidebar_link');
        this.cartButton = Selector('.shopping_cart_link');
        this.addTocartButton = Selector('.btn_inventory');
        this.shoppingCartBadge = Selector('.shopping_cart_badge', { timeout: 1000 });
        this.item = Selector('.inventory_item');
        this.cartItems = Selector('.cart_item');
    }

}

export default new InventoryPage();