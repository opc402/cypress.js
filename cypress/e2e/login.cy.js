describe('Проверка авторизации', function () {

        it('Правильный логин и правильный пароль', function () {
           cy.visit('https://login.qa.studio/'); // Зашли на сайт
           cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверить цвет кнопки восстановить пароль
           cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
           cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
           cy.get('#loginButton').click(); // Нажал войти
           cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю что после авторизации вижу текст
           cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
           cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видео для пользователя
         })
         
         it('Восстановление пароля', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверить цвет кнопки восстановить пароль
            cy.get('#forgotEmailButton').click(); // Нажали кнопку забыли пароль
            cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели любой имейл
            cy.get('#restoreEmailButton').click(); // Нажал отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  // Проверяю что после восстановления вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
          })

          it('Правильный логин и НЕ правильный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверить цвет кнопки восстановить пароль
            cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
            cy.get('#pass').type('222222'); // Ввели НЕ правильный пароль
            cy.get('#loginButton').click(); // Нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видео для пользователя
          })

          it('НЕ правильный логин и правильный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверить цвет кнопки восстановить пароль
            cy.get('#mail').type('german@dolnikov2222.ru'); // Ввели НЕ правильный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
            cy.get('#loginButton').click(); // Нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видео для пользователя
          })

          it('Логин без @ и правильный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверить цвет кнопки восстановить пароль
            cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
            cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
            cy.get('#loginButton').click(); // Нажал войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
          })

          it('Приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверить цвет кнопки восстановить пароль
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с заглавными буквами
            cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
            cy.get('#loginButton').click(); // Нажал войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
         })
   })

   