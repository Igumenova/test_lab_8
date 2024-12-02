import RegistrationPage from "../pageObjects/RegistrationPage";

describe("Страница регистрации", () => {
  let registrationPage;

  beforeEach(() => {
    registrationPage = new RegistrationPage();
    cy.viewport(1200, 750);
    registrationPage.visitPage();
  });

  it("1.1 Регистрация пользователя с валидными данными", () => {
    registrationPage.register(
      `user_${Math.random().toString(36).substring(2, 10)}@example.com`,
      "password123",
      `8${Math.floor(1000000000 + Math.random() * 9009999999)}`
    );
    registrationPage.checkSuccessMessage();
  });

  it("1.2 Регистрация с пустым полем логина", () => {
    registrationPage.register(
      "",
      "password123",
      `8${Math.floor(1000000000 + Math.random() * 9009999999)}`
    );
    registrationPage.checkErrorEmailMessage();
  });

  it("1.3 Регистрация с пустым полем пароля", () => {
    registrationPage.register("asdasdww@example.com", "", "89022222622");
    registrationPage.checkErrorPassMessage();
  });

  it("1.4 Регистрация пользователя с неуникальным номером телефона", () => {
    registrationPage.register(
      "asdasdww@example.com",
      "password123",
      "89022222622"
    );
    registrationPage.checkErrorMessage();
  });
});
