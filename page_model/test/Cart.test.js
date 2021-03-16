import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

import { CONSTANTS } from '../data/Constants';
import { validUser } from '../roles/Roles.js';

fixture('Shopping cart Tests')
    .page `${CONSTANTS.BASE_URL}`
    .meta('type', 'cart');

test("User navigates to shopping cart", async t => {
    await t
        .useRole(validUser)
        .click(InventoryPage.cartButton)
        .expect(CartPage.title.innerText).eql('Your Cart');
});

test("Add single item to shopping cart", async t => {
    await t
        .useRole(validUser)
        .click(InventoryPage.addTocartButton)
        .expect(InventoryPage.shoppingCartBadge.exists).ok({timeout: 1000});
});

test("Add multiple item to shopping cart", async t => {
    await t
        .useRole(validUser);

    const totalItems = await InventoryPage.addTocartButton.count;
    const items = await InventoryPage.addTocartButton;

    for(let i = 0; i < totalItems; i++) {
        await t
            .click(items.nth(i))
            .expect(InventoryPage.shoppingCartBadge.innerText).eql(i+1+'',{timeout: 1000});
    };
    
});