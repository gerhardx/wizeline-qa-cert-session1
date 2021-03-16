import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import UserInfoPage from '../pages/UserInfoPage';
import OverviewPage from '../pages/OverviewPage';

import { CONSTANTS } from '../data/Constants';
import { validUser } from '../roles/Roles.js';

fixture('Checkout info')
    .page `${CONSTANTS.BASE_URL}`
    .meta('type', 'info')
    .beforeEach( async t => {
        await t
            .useRole(validUser)
            .click(InventoryPage.addTocartButton)
            .click(InventoryPage.cartButton)
            .click(CartPage.checkoutButton);
    });

test("Shows error message on missing first name", async t => {
    await t
        .click(UserInfoPage.continueButton)
        .expect(UserInfoPage.errorMessage.exists).ok();        
});

test("Shows error message on missing last name", async t => {
    await t
        .typeText(UserInfoPage.firstnameField, "Gerard")
        .click(UserInfoPage.continueButton)
        .expect(UserInfoPage.errorMessage.exists).ok();        
});

test("Shows error message on missing zip", async t => {
    await t
        .typeText(UserInfoPage.firstnameField, "Gerard")
        .typeText(UserInfoPage.lastnameField, "AM")
        .click(UserInfoPage.continueButton)
        .expect(UserInfoPage.errorMessage.exists).ok();        
});

test("Navigates to overview", async t => {
    await t
        .typeText(UserInfoPage.firstnameField, "Gerard")
        .typeText(UserInfoPage.lastnameField, "AM")
        .typeText(UserInfoPage.postalcodeField, "12345")
        .click(UserInfoPage.continueButton)
        .expect(OverviewPage.title.innerText).eql('Checkout: Overview');     
});

