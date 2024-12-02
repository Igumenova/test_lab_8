import NavigationPage from "../pageObjects/NavigationPage";

describe("Навигация", () => {
  let navigationPage;

  const sections = [
    { selector: "a[href='/category/bags/']", url: "/category/bags/" },
    { selector: "a[href='/category/backpacks/']", url: "/category/backpacks/" },
    {
      selector: "a[href='/category/aksessuary/']",
      url: "/category/aksessuary/",
    },
    { selector: "a[href='/shop/clothes/']", url: "/shop/clothes/" },
    { selector: "a[href='/cart/']", url: "/cart/" },
    { selector: "a[href='/account/favorites/']", url: "/account/favorites/" },
  ];

  beforeEach(() => {
    navigationPage = new NavigationPage();
    navigationPage.visitPage();

    cy.viewport(1200, 750);
  });

  it(`3.1 Навигация по основным разделам магазина`, () => {
    sections.forEach((section) => {
      navigationPage.navigateToSection(section);
      cy.viewport(1200, 750);
      navigationPage.verifySectionUrl(section);
    });
  });

  it("3.2 Переход на несуществующий ресурс", () => {
    cy.visit("https://arnypraht.com/asdasdasd/", { failOnStatusCode: false });
    cy.get("h1").should("contain.text", "Страница не найдена ");
  });
});
