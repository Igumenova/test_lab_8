import Page from "./Page";

class CartPage extends Page {
  constructor() {
    super();
    this.setUrl("https://arnypraht.com/cart/");
    this.amountInCart = "span[data-quantity-number]";
    this.plusBtn = "button[data-quantity-plus]";
    this.minusBtn = "button[data-quantity-minus]";
  }

  checkEmptyCart() {
    cy.get("h1").should("have.text", "В вашей корзине пусто");
  }

  checkNotEmptyCart() {
    cy.get("h1").should("not.have.text", "В вашей корзине пусто");
  }

  checkAmount(amount) {
    cy.get(this.amountInCart).should("have.text", amount);
  }

  plusClick() {
    cy.get(this.plusBtn).click();
  }

  minusClick() {
    cy.get(this.minusBtn).click();
  }
}

export default CartPage;
