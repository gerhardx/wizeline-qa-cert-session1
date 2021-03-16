import { Selector, t } from 'testcafe';

class FinishPage {
    constructor(){
        this.title = Selector('.subheader');
    }
}

export default new FinishPage();