import FilterPage from "../pageObjects/FilterPage";

describe("Фильтрация", () => {
  let filterPage;

  beforeEach(() => {
    filterPage = new FilterPage();
    cy.viewport(1200, 750);
    filterPage.setUrl("https://arnypraht.com/category/bags/");
    filterPage.visitPage();
  });

  it("7.1 Позитивная фильтрация отображаемых товаров в разделе 'Сумки'", () => {
    filterPage.filter();
    cy.wait(2000);
    filterPage.checkFilterBurgundy();
  });
});
