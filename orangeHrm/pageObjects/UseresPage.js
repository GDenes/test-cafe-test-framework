import { Selector, t } from 'testcafe';

class UsersPage{
    constructor(){
        this.useresList = Selector("tbody[ng-if='!listData.staticBody']");
        this.userRolseTex = Selector("th[data-field='userroles']");
    }

    async printAllusername(){


        for(var i = 1; i<=50; i++){
            var username = Selector("tbody[ng-if='!listData.staticBody'] > tr:nth-of-type(" + i + ") > td:nth-of-type(2) span");
            console.log(await username.textContent);
        }
    }
}

export default new UsersPage();