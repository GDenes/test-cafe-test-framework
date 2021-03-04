import { Selector, t } from 'testcafe';

class ProductPage{
    constructor(){
        this.description = Selector("div#short_description_content > p");
        this.sizeDropDown = Selector(".attribute_select");
        this.IncreaseQuantityButton = Selector(".icon-plus");
        this.BlueColorButton = Selector("[name='Blue']");
        this.AddToChartButton = Selector("button[name='Submit'] > span");
     }

    async selectSizeM(){
        const MSize = Selector("option[value='2']");
        await t
            .click(this.sizeDropDown)
            .click(MSize);
    }

    
}
export default new ProductPage();