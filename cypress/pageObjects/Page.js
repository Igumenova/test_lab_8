class Page {
  constructor() {
    this.url = "https://arnypraht.com/";
  }

  visitPage() {
    cy.visit(this.url);
  }

  setUrl(url) {
    this.url = url;
  }
}

export default Page;
