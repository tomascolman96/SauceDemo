import { Selector } from 'testcafe';

fixture`Login`.page`https://www.saucedemo.com/`;

test('Error User Login, Logout and Verify Logout', async t => {
    await t.setTestSpeed(0.5);

    // Iniciar sesión con el usuario "error_user"
    await t
        .typeText('input[name="user-name"]', 'error_user')
        .typeText('input[name="password"]', 'secret_sauce')
        .click('input[type="submit"]');

    // Verificar que se muestra el mensaje de error de inicio de sesión
    const errorMessage = Selector('.error-message');
    await t.expect(errorMessage.exists).ok();

    // Hacer clic en el menú hamburguesa utilizando su ID
    await t.click('#react-burger-menu-btn');

    // Hacer clic en el botón "Logout"
    await t.click('#logout_sidebar_link');

    // Verificar que el campo de usuario está vacío después de cerrar la sesión
    const usernameField = await Selector('input[name="user-name"]').value;
    await t.expect(usernameField).eql('');
});








