import { Selector, t } from 'testcafe';

class OrderPage{
    constructor(){
        this.productAttributes = Selector("td.cart_description > small:nth-of-type(2)");
        this.totalPrice = Selector("#total_price");
        this.proceedToCheckoutButton = Selector("a.standard-checkout > span");
    }
}

export default new OrderPage();