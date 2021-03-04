import { Selector, t } from 'testcafe';

class HomePage{
    constructor(){
        this.firstItemInPupularList = Selector('ul#homefeatured > li:nth-of-type(1)');
        
     
    }
}

export default new HomePage();