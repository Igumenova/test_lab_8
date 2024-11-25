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
    this.enterEmail(email);
    this.enterPassword(password);
    this.submit();
  }

  checkErrorMessage() {
    cy.get(this.errorMessage).should("be.visible");
  }
}

export default AuthPage;
