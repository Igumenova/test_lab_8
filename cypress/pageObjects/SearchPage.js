import Page from "./Page";

class SearchPage extends Page {
  constructor() {
    super();
    this.setUrl("https://arnypraht.com/rezultatyi-poiska/");
    this.searchInput = "#field-5";
    this.result =
      "#search-result-products > div.cards.cards--grid.cards--grid-full";
  }

  enterSearch(search) {
    cy.get(this.searchInput).clear().type(search);
  }

  submit() {
    cy.get(this.searchInput).type("{enter}");
  }

  checkResultSuccess(searchPattern) {
    cy.get(this.result)
      .invoke("text")
      .then((text) => {
        const cleanedText = text.replace(/\s+/g, " ").trim();
        expect(cleanedText.toLowerCase()).to.contain(
          searchPattern.toLowerCase()
        );
      });
  }

  checkResultError() {
    cy.get(this.result).should("not.exist");
  }

  search(searchPattern) {
    this.enterSearch(searchPattern);
    this.submit();
  }
}

export default SearchPage;
