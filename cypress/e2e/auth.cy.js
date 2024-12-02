import AuthPage from "../pageObjects/AuthPage";

describe("Страница авторизации", () => {
  let authPage;

  beforeEach(() => {
    authPage = new AuthPage();
    authPage.visitPage();
    cy.viewport(1200, 750);
  });

  it("2.1 Авторизация с валидными данными", () => {
    authPage.auth("yulya.gummi@gmail.com", "123123123");
    cy.url().should("include", "/overview");
  });

  it("2.2 Авторизация с некорректным паролем", () => {
    authPage.auth("yulya.gummi@gmail.com", "12312asdasd3123");
    authPage.checkErrorMessage();
  });

  it("2.3 Авторизация без ввода пароля", () => {
    authPage.auth("yulya.gummi@gmail.com", "");
    authPage.checkErrorPassMessage();
  });

  it("2.4 Авторизация без ввода email", () => {
    authPage.auth("", "12312asdasd3123");
    authPage.checkErrorEmailMessage();
  });
});
