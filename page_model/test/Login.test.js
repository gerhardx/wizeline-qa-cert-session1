import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import { CONSTANTS } from '../data/Constants';

const users = require('../data/Users.json');

fixture('Login Tests')
    .page `${CONSTANTS.BASE_URL}`
    .meta('type', 'auth');

users.forEach(data => {
    test(`${data.case}`, async t => {
        await LoginPage.submitLoginForm(`${data.username}`, `${data.password}`)
        if(data.shouldLogin){
            await t
            .expect(InventoryPage.title.innerText).eql(`${data.expectedResult}`);
        } else {
            await t
            .expect(LoginPage.errorMessage.exists).ok();
        };
    });
});

//TODO: There are users with problem, glitch. Need spec to detect performance issues
