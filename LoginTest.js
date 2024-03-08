import { Selector } from 'testcafe';

fixture`Login`.page`www.saucedemo.com/`;

test('Successfull Login', async t => {
    await t.setTestSpeed(0.5);

    await t
        .typeText('input[name="user-name"]', 'standard_user') 
        .typeText('input[name="password"]', 'secret_sauce') 
        .click('input[type="submit"]'); 

    await t.expect(Selector('.title').innerText).eql('Products'); 
});
