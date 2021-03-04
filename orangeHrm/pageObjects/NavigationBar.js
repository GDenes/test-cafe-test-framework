import { Selector, t } from 'testcafe';

class NavigationBar{
    constructor(){
        this.AdminButton = Selector("li#menu_admin_viewAdminModule > .collapsible-header > .left-menu-title");
        
    }

    async navigateUsersPage(){
        const userManagmentButton = Selector("li#menu_admin_UserManagement > .collapsible-header > .left-menu-title");
        const usersButton = Selector("a#menu_admin_viewSystemUsers > .left-menu-title");

        await t
            .click(this.AdminButton)
            .click(userManagmentButton)
            .click(usersButton);
    }
}

export default new NavigationBar();