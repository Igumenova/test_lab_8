import CartPage from "../pageObjects/CartPage";
import ItemPage from "../pageObjects/ItemPage";

describe("Редактирование корзины", () => {
  let cartPage;
  let itemPage;

  beforeEach(() => {
    cartPage = new CartPage();
    itemPage = new ItemPage();

    cy.viewport(1200, 750);

    itemPage.setUrl("https://arnypraht.com/category/bags/icon-sandrift/");
    itemPage.visitPage();
  });

  it("5.1 Изменении колличества, уже добавленного товара, в корзине", () => {
    itemPage.addToCart();
    itemPage.addToCart();
    cy.wait(2000);
    itemPage.visitCart();

    cartPage.checkNotEmptyCart();
    cartPage.plusClick();

    cartPage.minusClick();
    cartPage.minusClick();

    cartPage.checkAmount(1);
  });

  it("5.2 Изменение количества товара в корзине, если изначально корзина пустая", () => {
    itemPage.visitCart();

    cartPage.checkEmptyCart();
  });
});
