class homaHomePage {
  elements = {
    gameReview: () => cy.get("body > div > div:nth-child(4) > div > div"),
    blogPageButton: () =>
      cy.get(
        "body > div > div.section.py-80.pb-120.wf-section > div > div.div-block-5 > div:nth-child(2) > a > div"
      ),
  };

  pages = {
    lifeAtHomaPage: () => cy.get("div > div.collection-list-8.w-dyn-items"),
  };
}

module.exports = new homaHomePage();
