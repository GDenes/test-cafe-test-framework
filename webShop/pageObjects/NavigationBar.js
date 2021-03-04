import { Selector, t } from 'testcafe';

class NavigationBar{
    constructor(){
     this.logoImage = Selector("[alt='My Store']");
     this.searchField = Selector("#search_query_top");
     this.womenPageButton = Selector("a[title='Women']");

    }

    async hoverWomenAndSelectTshirstLink(){
        const tshirtLink = Selector("ul.sf-menu .submenu-container [title='T-shirts']")
        await t
            .hover(this.womenPageButton)
            .click(tshirtLink);
    }

    async selectElementInSearchDorpDownWithName(name){
        const dropDownList = Selector(".ac_results");
        await t
            .click(dropDownList.withText(name));
    }

}
export default new NavigationBar();