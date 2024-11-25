import Page from "./Page";

class ItemPage extends Page {
  constructor() {
    super();
    this.goToCartBtn = "#msMiniCart";
    this.addToCartBtn =
      "body > div:nth-child(9) > div > div.page__content.product__content > div > div.product__info > form > div > div.product__info-body > div.row.row--s.row--first > div:nth-child(2) > div > div.bar.bar--limited > button";
  }

  visitCart() {
    cy.get(this.goToCartBtn).click();
  }

  addToCart() {
    cy.get(this.addToCartBtn).click();
  }
}

export default ItemPage;
