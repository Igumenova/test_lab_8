import SearchPage from "../pageObjects/SearchPage";

describe("Tests", () => {
  let searchPage;

  beforeEach(() => {
    searchPage = new SearchPage();
    searchPage.visitPage();
  });

  it("4.1 Позитивный поиск товара по имени", () => {
    const searchPattern = "unblock l";
    searchPage.search(searchPattern);
    searchPage.checkResultSuccess(searchPattern);
  });

  it("4.2 Негативный поиск товара по несуществующему имени", () => {
    const searchPattern = "unblasdasdasdasdock l";
    searchPage.search(searchPattern);
    searchPage.checkResultError();
  });
});
