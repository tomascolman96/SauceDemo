import { Selector } from 'testcafe';

fixture`Login`.page`https://www.saucedemo.com/`;

test('Successfull Login', async t => {
    await t.setTestSpeed(0.5);

    
    await t
        .typeText('input[name="user-name"]', 'error_user') 
        .typeText('input[name="password"]', 'secret_sauce') 
        .click('input[type="submit"]'); 

    
    await t.expect(Selector('.title').innerText).eql('Products');
    
    
    const alertExists = await Selector('.alert').exists; 
    if (alertExists) {
        await t.click('.accept-button'); 
    }

   
    const firstProduct = Selector('.inventory_item').nth(0);
    await t.click(firstProduct.find('.btn_inventory'));

   
    const secondProduct = Selector('.inventory_item').nth(1); 
    await t.click(secondProduct.find('.btn_inventory'));

    
    await t.click('.shopping_cart_link');

    
    const cartItem1 = Selector('.cart_item').nth(0); 
    const cartItem2 = Selector('.cart_item').nth(1); 
    await t.expect(cartItem1.exists).ok();
    await t.expect(cartItem2.exists).ok();
});


