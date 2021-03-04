import { Selector } from 'testcafe';

class TshirtsPage{
    constructor(){
        this.fadedShortProductLink = Selector(".product-name[title='Faded Short Sleeve T-shirts']");
    }
}
export default new TshirtsPage();