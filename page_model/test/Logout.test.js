import InventoryPage from '../pages/InventoryPage';
import LoginPage from '../pages/LoginPage';
import { CONSTANTS } from '../data/Constants';
import { validUser } from '../roles/Roles.js';

fixture('Log out Tests')
    .page `${CONSTANTS.BASE_URL}`
    .meta('type', 'auth');

test("Log out", async t => {
    await t
        .useRole(validUser)
        .expect(InventoryPage.title.innerText).eql("Products")
        .click(InventoryPage.menuButton)
        .click(InventoryPage.logOutButton)
        .expect(LoginPage.loginButton.exists).ok()
});