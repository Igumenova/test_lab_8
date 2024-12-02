import CartPage from "../pageObjects/CartPage";
import ItemPage from "../pageObjects/ItemPage";

describe("Добавление в корзину", () => {
  let cartPage;
  let itemPage;

  beforeEach(() => {
    cartPage = new CartPage();
    itemPage = new ItemPage();

    cy.viewport(1200, 750);

    itemPage.setUrl("https://arnypraht.com/category/bags/icon-sandrift/");
    itemPage.visitPage();
  });

  it("6.1 Добавление товара в корзину", () => {
    itemPage.addToCart();
    itemPage.addToCart();
    cy.wait(2000);

    itemPage.visitCart();
    cartPage.checkNotEmptyCart();
    cartPage.checkAmount(2);
  });
});
