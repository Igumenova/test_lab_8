import SearchPage from "../pageObjects/SearchPage";

describe("Поиск", () => {
  let searchPage;

  beforeEach(() => {
    searchPage = new SearchPage();
    searchPage.visitPage();
    cy.viewport(1200, 750);
  });

  it("4.1 Поиск товара по имени", () => {
    const searchPattern = "unblock l";
    searchPage.search(searchPattern);
    searchPage.checkResultSuccess(searchPattern);
  });

  it("4.2 Поиск товара по несуществующему имени", () => {
    const searchPattern = "unblasdasdasdasdock l";
    searchPage.search(searchPattern);
    searchPage.checkResultError();
  });
});
