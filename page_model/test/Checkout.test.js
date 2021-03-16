import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import UserInfoPage from '../pages/UserInfoPage';
import OverviewPage from '../pages/OverviewPage';
import FinishPage from '../pages/FinishPage';

import { CONSTANTS } from '../data/Constants';
import { validUser } from '../roles/Roles.js';

fixture('Checkout Tests')
    .page `${CONSTANTS.BASE_URL}`
    .meta('type', 'checkout')
    .beforeEach( async t => {
        await t
            .useRole(validUser);
    });

test.only("Validate added items", async t => {
    const totalItems = await InventoryPage.item.count;
    const items = await InventoryPage.item;

    let added = [];

    for(let i = 0; i < totalItems; i++) {

        let random = Math.floor(Math.random() * totalItems);

        if(await items.child('.pricebar').child('.btn_inventory').nth(random).innerText == "ADD TO CART"){
            added.push(await items.child('.inventory_item_label').child('a').nth(random).id);
            await t
                .click(items.child('.pricebar').child('.btn_inventory').nth(random));
        };
    };

    await t
        .click(InventoryPage.cartButton);

        const totalCartItems = await InventoryPage.cartItems.count;
        const cartItems = await InventoryPage.cartItems;

        for(let i = 0; i < totalCartItems; i++) {
            await t
                .expect(cartItems.child('.cart_item_label').child('a').nth(i).id).eql(added[i]); 
        };

});

test("Place order", async t => {
    await t
        .click(InventoryPage.addTocartButton)
        .click(InventoryPage.cartButton)
        .click(CartPage.checkoutButton)
        .typeText(UserInfoPage.firstnameField, "Gerard")
        .typeText(UserInfoPage.lastnameField, "AM")
        .typeText(UserInfoPage.postalcodeField, "12345")
        .click(UserInfoPage.continueButton)
        .click(OverviewPage.checkoutButton)
        .expect(FinishPage.title.innerText).eql('Finish');     
});
