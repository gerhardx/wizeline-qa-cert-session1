import { Role, Selector } from 'testcafe';
import { CONSTANTS } from '../data/Constants';
import LoginPage from '../pages/LoginPage';

const validUser = Role(`${CONSTANTS.BASE_URL}`, async t => {
    await LoginPage.submitLoginForm(`${CONSTANTS.VALID_USER.user_name}`, `${CONSTANTS.VALID_USER.password}`);
}, { preserveUrl: true });

export { validUser };