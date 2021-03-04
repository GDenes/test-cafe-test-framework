import { Selector, t } from 'testcafe';

class ProductDialogBox{
    constructor(){
        this.productAttributes = Selector("#layer_cart_product_attributes");
        this.quantityNumber = Selector("#layer_cart_product_quantity");
        this.prdouctTitle = Selector("#layer_cart_product_title");
        this.proceedToCheckoutButton = Selector("a.button-medium > span");
    }
}

export default new ProductDialogBox();