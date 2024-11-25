import Page from "./Page";

class NavigationPage extends Page {
  constructor() {
    super();
    this.havigationHeader = "body > header > div.header__main";
  }

  navigateToSection(section) {
    cy.get(this.havigationHeader).find(section.selector).click();
  }

  verifySectionUrl(section) {
    cy.url().should("include", section.url);
  }
}

export default NavigationPage;
