import Page from "./Page";

class AuthPage extends Page {
  constructor() {
    super();
    this.setUrl("https://arnypraht.com/login/");
    this.emailInput = "#field-5";
    this.passwordInput = "#field-6";
    this.submitButton = "#office-auth-login > div.envelope__footer > button";
    this.errorMessage =
      "#jGrowl > div.jGrowl-notification.alert.ui-state-highlight.ui-corner-all.office-message-error";
    this.passwordError =
      "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(1) > div:nth-child(3) > div.field__message";
    this.emailError =
      "#office-auth-register > div.form__main > div.page__main-cols > div:nth-child(1) > div:nth-child(1) > div.field__message";
  }

  enterEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  click(element) {
    cy.get(element).click();
  }

  auth(email, password) {
    if (email) this.enterEmail(email);
    if (password) this.enterPassword(password);
    this.submit();
  }

  checkErrorMessage() {
    cy.get(this.errorMessage).should("be.visible");
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

export default AuthPage;
