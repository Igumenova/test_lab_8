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

  it("5.1 Позитивное изменении колличества товара для заказа в корзине", () => {
    itemPage.addToCart();
    itemPage.addToCart();
    cy.wait(2000);
    itemPage.visitCart();

    cartPage.checkNotEmptyCart();
    cartPage.plusClick();
    cartPage.plusClick();
    cartPage.plusClick();

    cartPage.minusClick();

    cartPage.checkAmount(4);
  });

  it("5.2 Негативное изменение количества товара в корзине, если изначально корзина пустая", () => {
    itemPage.visitCart();

    cartPage.checkEmptyCart();
  });
});
