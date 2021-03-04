import { Selector } from 'testcafe';

import navigationBar from './../pageObjects/NavigationBar';
import homePage from './../pageObjects/HomePage';
import productPage from './../pageObjects/ProductPage';
import tshirtsPage from './../pageObjects/TshirtsPage';
import productDialogBox from './../pageObjects/ProductDialogBox';
import orderPage from './../pageObjects/Orderpage';
import loginPage from './../pageObjects/LoginPage';

fixture ('Home Page')
    .page('http://automationpractice.com/index.php');

test("Create screenshot first element in popular list", async t =>{
        await t
        .maximizeWindow()
        .takeElementScreenshot(homePage.firstItemInPupularList);
});
    

test("Search for 'blouse'", async t =>{
    const description = 'Short sleeved blouse with feminine draped sleeve detail.';
    await t
        .typeText(navigationBar.searchField, 'blouse');
    await navigationBar.selectElementInSearchDorpDownWithName("Blouse");
    await t
        .expect(productPage.description.innerText).eql(description);
});

test("Order test", async t =>{
    const productName = 'Faded Short Sleeve T-shirts';
    const productAttributes = 'Blue, M';
    const quantityNumber = '2';

    const orderProductAttributes = 'Color : Blue, Size : M';
    const orderTotalPrice = '$35.02';

    const loginPageHeader = 'AUTHENTICATION';
    const createAccountText = 'CREATE AN ACCOUNT';
   
    await navigationBar.hoverWomenAndSelectTshirstLink();

    await t
        .click(tshirtsPage.fadedShortProductLink)
        .click(productPage.IncreaseQuantityButton)
        .click(productPage.BlueColorButton);

    await productPage.selectSizeM();
    await t
        .click(productPage.AddToChartButton);

    await t
        .expect(productDialogBox.prdouctTitle.innerText).eql(productName)
        .expect(productDialogBox.productAttributes.innerText).eql(productAttributes)
        .expect(productDialogBox.quantityNumber.innerText).eql(quantityNumber)
        .click(productDialogBox.proceedToCheckoutButton);    
        
    await t
        .expect(orderPage.productAttributes.innerText).eql(orderProductAttributes)
        .expect(orderPage.totalPrice.innerText).eql(orderTotalPrice)
        .click(orderPage.proceedToCheckoutButton);
        
     await t
        .expect(loginPage.createAnAccountText.innerText).eql(createAccountText)
        .expect(loginPage.pageHeader.innerText).eql(loginPageHeader);

});