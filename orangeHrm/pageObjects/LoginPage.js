import { Selector, t } from 'testcafe';

class LoginPage{
    constructor(){
        this.loginButton = Selector("#btnLogin");
        
    }
}

export default new LoginPage();