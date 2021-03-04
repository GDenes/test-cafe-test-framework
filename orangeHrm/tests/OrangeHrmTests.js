import { Selector } from 'testcafe';

import loginPage from './../pageObjects/LoginPage';
import navigationBar from './../pageObjects/NavigationBar';
import usersPage from './../pageObjects/UseresPage';


fixture ('Login Page')
    .page('https://orangehrm-demo-6x.orangehrmlive.com/');

 test("Print all user", async t =>{
     
     await t
        .maximizeWindow()
        .click(loginPage.loginButton);

     await navigationBar.navigateUsersPage();
     await t
        .expect(usersPage.userRolseTex.innerText).eql("User Role(s)", { timeout: 50000 }) 
        .expect(usersPage.useresList.childElementCount).eql(50);

    
     await usersPage.printAllusername();
     await t.wait(10000);
 });   