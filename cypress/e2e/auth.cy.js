import AuthPage from "../pageObjects/AuthPage";

describe("Страница авторизации", () => {
  let authPage;

  beforeEach(() => {
    authPage = new AuthPage();
    authPage.visitPage();
  });

  it("2.1 Позитивная авторизация с валидными данными", () => {
    authPage.auth("yulya.gummi@gmail.com", "123123123");
    cy.url().should("include", "/overview");
  });

  it("2.2 Негативная авторизация с невалидными данными", () => {
    authPage.auth("yulya.gummi@gmail.com", "12312asdasd3123");
    authPage.checkErrorMessage();
  });
});
