import { Selector, t } from 'testcafe';

class OverviewPage {
    constructor(){
        this.title = Selector('.subheader');
    }
}

export default new OverviewPage();