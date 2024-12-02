import Page from "./Page";

class RegistrationPage extends Page {
  constructor() {
    super();
    this.setUrl("https://arnypraht.com/register/");
    this.emailInput = "#office-auth-register-email";
    this.passwordInput = "#office-register-form-password";
    this.phoneInput = "#office-auth-register-mobilephone";
    this.submitButton =
      "#office-auth-register > div.form__main > div.envelope__footer > button";
  }

  enterEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  enterPhone(phone) {
    cy.get(this.phoneInput).clear().type(phone);
  }

  enterDate() {
    cy.get(
      "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(2) > div.fieldset__field.field-row.field.field--date-combo.field--ready > div.date-select > span:nth-child(2) > span.selection"
    ).click();

    cy.wait(1000);
    cy.get("li.select2-results__option").contains("04").click();
    cy.wait(1000);
    cy.get(
      "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(2) > div.fieldset__field.field-row.field.field--date-combo.field--ready > div.date-select > span:nth-child(4) > span.selection"
    ).click();
    cy.wait(1000);
    cy.get("li.select2-results__option").contains("Мар").click();
    cy.wait(1000);
    cy.get(
      "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(2) > div.fieldset__field.field-row.field.field--date-combo.field--ready > div.date-select > span:nth-child(6) > span.selection"
    ).click();
    cy.wait(1000);
    cy.get("li.select2-results__option").contains("2023").click();
    cy.wait(1000);
  }

  enterGender() {
    cy.get(
      "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(2) > div.fieldset__field.field-row.choice > label:nth-child(1)"
    ).click();
  }

  confirmPolicy() {
    cy.get(
      "#office-auth-register > div.form__main > label > span.checkbox__switch.checkbox__box"
    ).click();
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  click(element) {
    cy.get(element).click();
  }

  register(email, password, phone) {
    if (email) this.enterEmail(email);
    if (password) this.enterPassword(password);
    if (phone) this.enterPhone(phone);
    this.enterDate();
    this.enterGender();
    this.confirmPolicy();
    this.submit();
  }

  checkSuccessMessage() {
    cy.get("#jGrowl").should("be.visible");
    cy.get(".jGrowl-message").should(
      "contain.text",
      "Ссылка для входа в личный кабинет отправлена на указанный e-mail."
    );
  }

  checkErrorMessage() {
    cy.get("#jGrowl").should("be.visible");
    cy.get(".office-message-error").should("be.visible");
  }

  checkErrorPassMessage() {
    cy.get(this.passwordInput)
      .should("have.prop", "validationMessage")
      .then((validationMessage) => {
        expect(validationMessage).to.not.be.empty;
      });
  }

  checkErrorEmailMessage() {
    cy.get(this.emailInput)
      .should("have.prop", "validationMessage")
      .then((validationMessage) => {
        expect(validationMessage).to.not.be.empty;
      });
  }
}

export default RegistrationPage;
