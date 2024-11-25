import RegistrationPage from "../pageObjects/RegistrationPage";

describe("Страница регистрации", () => {
  let registrationPage;

  beforeEach(() => {
    registrationPage = new RegistrationPage();
    cy.viewport(1200, 750);
    registrationPage.visitPage();
  });

  it("1.1 Позитивная регистрация пользователя с валидными данными", () => {
    registrationPage.register(
      `user_${Math.random().toString(36).substring(2, 10)}@example.com`,
      "password123",
      `8${Math.floor(1000000000 + Math.random() * 9009999999)}`
    );
    registrationPage.checkSuccessMessage();
  });

  it("1.2 Негативная регистрация с уже существующим email и номером телефона. Отображение ошибки", () => {
    registrationPage.register(
      "asdasdww@example.com",
      "password123",
      "89022222622"
    );
    registrationPage.checkErrorMessage();
  });
});
