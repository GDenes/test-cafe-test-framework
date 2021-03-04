import { Selector, t } from 'testcafe';

class LoginPage{
    constructor(){
        this.pageHeader = Selector(".page-heading");
        this.createAnAccountText = Selector("form#create-account_form > .page-subheading");
    }
}

export default new LoginPage();